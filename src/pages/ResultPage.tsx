import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Camera } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Mapping judul model ke judul pencarian Jikan 
const titleMap: Record<string, string> = {
  'Hello World': 'Hello World',
  'The Garden of Words': 'Kotonoha no Niwa',
  'Your Name': 'Kimi no Na wa.',
  'Natsu e no Tunnel Sayonara no Deguchi': 'The Tunnel to Summer, the Exit of Goodbyes',
  'Josee, the Tiger and the Fish': 'Josee to Tora to Sakana-tachi.'
};

const ResultPage = () => {
  const [searchParams] = useSearchParams();
  const animeTitle = searchParams.get('anime');
  const [animeData, setAnimeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimeData = async () => {
      setLoading(true);
      setAnimeData(null);
      let query = animeTitle || '';
      if (titleMap[query]) query = titleMap[query];
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=1`);
        const data = await res.json();
        if (data.data && data.data.length > 0) {
          const anime = data.data[0];
          setAnimeData({
            title: anime.title,
            alternativeTitle: anime.title_english || anime.title_japanese,
            synopsis: anime.synopsis,
            genres: anime.genres.map((g: any) => g.name),
            studio: anime.studios && anime.studios.length > 0 ? anime.studios.map((s: any) => s.name).join(', ') : '-',
            releaseYear: anime.aired && anime.aired.prop ? `${anime.aired.prop.from.year}${anime.aired.prop.to && anime.aired.prop.to.year && anime.aired.prop.to.year !== anime.aired.prop.from.year ? ' - ' + anime.aired.prop.to.year : ''}` : '-',
            episodes: anime.episodes ? `${anime.episodes} episodes` : '-',
            rating: anime.score ? `${anime.score}/10` : '-',
            status: anime.status,
            posterUrl: anime.images?.jpg?.large_image_url || anime.images?.jpg?.image_url,
            externalLinks: {
              myAnimeList: anime.url,
              aniList: `https://anilist.co/search/anime?search=${encodeURIComponent(anime.title)}`
            }
          });
        } else {
          setAnimeData(null);
        }
      } catch (e) {
        setAnimeData(null);
      }
      setLoading(false);
    };
    if (animeTitle) fetchAnimeData();
  }, [animeTitle]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mb-4"></div>
            <h2 className="text-xl font-medium text-gray-900">Loading anime details...</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!animeData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Anime Not Found</h2>
            <p className="text-gray-600 mb-8">We couldn't find details for this anime.</p>
            <Link
              to="/detect"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
            >
              Try Another Detection
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link 
            to="/detect"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Detection
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Anime Details
          </h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 md:p-8">
            {/* Poster */}
            <div className="lg:col-span-1">
              <img
                src={animeData.posterUrl}
                alt={animeData.title}
                className="w-full h-96 lg:h-full object-cover rounded-lg"
              />
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {animeData.title}
                </h2>
                {animeData.alternativeTitle && (
                  <p className="text-lg text-gray-600 mb-4">
                    {animeData.alternativeTitle}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {animeData.genres.map((genre: string, index: number) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Studio
                  </h3>
                  <p className="text-gray-900 font-medium">{animeData.studio}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Release Year
                  </h3>
                  <p className="text-gray-900 font-medium">{animeData.releaseYear}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Episodes
                  </h3>
                  <p className="text-gray-900 font-medium">{animeData.episodes}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Rating
                  </h3>
                  <p className="text-gray-900 font-medium">{animeData.rating}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                    Status
                  </h3>
                  <p className="text-gray-900 font-medium">{animeData.status}</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Synopsis</h3>
                <p className="text-gray-700 leading-relaxed">{animeData.synopsis}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">External Links</h3>
                <div className="flex flex-wrap gap-3">
                  {animeData.externalLinks.myAnimeList && (
                    <a
                      href={animeData.externalLinks.myAnimeList}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      MyAnimeList
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  )}
                  {animeData.externalLinks.aniList && (
                    <a
                      href={animeData.externalLinks.aniList}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                      AniList
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  )}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <Link
                  to="/detect"
                  className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  <Camera className="h-5 w-5 mr-2" />
                  Detect Another Anime
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ResultPage;
