## Draft Penyesuaian UI/UX AnimeLens untuk Project Plan
# UI/UX Adjustment Draft for AnimeLens Project Plan (English Version)

## 🎨 Visual Identity Adjustments
1. Branding & Logo
- Keep the name "AnimeLens"
- Update tagline to: "AI-Powered Anime Recognition Research Platform"
- Add subtitle: "Developed by Team CC25-CR364"
- Maintain Purple-Blue gradient color scheme (aligned with research theme)

2. Header Navigation
- Simplify navigation menu to:
  - Home
  - About
  - Contact
- Keep the "Try Now" button, which scrolls to the detection section on the Home page
- Remove Detect, Research, and Documentation menu items

## 📱 Homepage Adjustments
### Homepage Redesign
- Section 1: Hero
  - Headline: "Anime Identification with AI Technology"
  - Subtitle: "A CNN-based research platform for anime image detection"
  - Primary CTA: "Try Detection Now"
  - Secondary CTA: "View Our Research"

- Section 2: Research Highlights (NEW)
  - "Dataset of 10,000+ Anime Images"
  - "Specialized Trained CNN Model"
  - "High Detection Accuracy"
  - "Integrated University Research"

- Section 3: How It Works (Updated)
  - Step 1: "Upload Anime Image"
  - Step 2: "Analyze with CNN Model"
  - Step 3: "Identification Results + Metadata"

- Section 4: Research Team (NEW)
  - Highlight team members from 5 universities
  - Focus on research aspects
  - Link to full team profiles

- Section 5: Integrated Detection Section
  - Upload interface with info: "Supported: JPG, PNG, GIF (Max 10MB)"
  - Upload progress indicator
  - Image preview with metadata
  - Batch upload option (for testing multiple images)
  - Confidence score with visual bar
  - Alternative predictions (top 3)
  - Technical details (processing time, model version)
  - Research data contribution notice
  - User feedback section:
    - "Is this result accurate?" (Yes/No)
    - "Help our research with your feedback"
    - Optional: "Correct the result if wrong"

## 🎯 UI Component Specifications
- Enhanced Upload Component
  - Drag & drop with visual feedback
  - File validation with error messages
  - Image preview with crop suggestion
  - Upload progress with percentage
  - Multiple file selection support

- Results Card Component
  - Anime title (large, bold)
  - Confidence score (visual progress bar)
  - Metadata grid (studio, year, genre)
  - Alternative suggestions (collapsible)
  - Action buttons (save, share, feedback)

- Research Stats Component (NEW)
  - Total detections performed
  - Current model accuracy
  - Dataset size
  - Processing speed average

- Team Profile Component (NEW)
  - Photo + Name + University
  - Role (ML/Frontend/Backend)
  - Contribution highlights
  - Contact/LinkedIn links

## 📊 Layout & Design Adjustments
- Color Scheme (Maintained)
  - Primary: Purple-Blue gradient
  - Secondary: Gray tones
  - Accent: Green (for success states)
  - Warning: Orange (for low confidence)
  - Error: Red (for failed uploads)

- Typography Hierarchy
  - H1: Research-focused headlines
  - H2: Section titles with academic tone
  - Body: Clear, informative text
  - Caption: Technical details and metadata

- Spacing & Layout
  - Wider content areas for data display
  - Card-based layout for research metrics
  - Grid system for team profiles
  - Responsive breakpoints for mobile research access

## 🔧 User Experience Improvements
- Navigation Flow
  - Landing → Research highlights → Upload
  - Upload → Results → Feedback → Research contribution
  - About → Team profiles → Research methodology

- Feedback Mechanisms
  - Accuracy rating system
  - Suggestion box for improvements
  - Research participation opt-in
  - Progress tracking for contributions

- Mobile Optimization
  - Touch-friendly upload interface
  - Swipeable results cards
  - Collapsible research sections
  - Optimized team profile grid

## 📱 Responsive Design Adjustments
- Desktop (1200px+)
  - Full research dashboard layout
  - Side-by-side upload and results
  - Expanded team profile grid
  - Detailed research metrics

- Tablet (768px-1199px)
  - Stacked upload and results
  - 2-column team profiles
  - Condensed research metrics
  - Collapsible navigation

- Mobile (320px-767px)
  - Single column layout
  - Touch-optimized upload
  - Card-based team profiles
  - Essential metrics only

## 🎨 Visual Elements to Add
- Research-Themed Graphics
  - University logos (subtle placement)
  - Research process illustrations
  - Data visualization charts
  - Academic-style infographics

- Interactive Elements
  - Hover effects on research metrics
  - Animated confidence score bars
  - Progressive disclosure for technical details
  - Smooth transitions between sections

- Loading States
  - Research-themed loading messages
  - Progress indicators with technical terms
  - Skeleton screens for data loading
  - Error states with helpful guidance

## 📋 Implementation Checklist
- Phase 1: Content Updates
  - [ ] Update all copy for research context
  - [ ] Add team member information
  - [ ] Create research methodology content
  - [ ] Update navigation structure

- Phase 2: Visual Enhancements
  - [ ] Add research metrics components
  - [ ] Enhance upload interface
  - [ ] Improve results display
  - [ ] Create team profile section

- Phase 3: UX Improvements
  - [ ] Add feedback mechanisms
  - [ ] Implement progress tracking
  - [ ] Optimize mobile experience
  - [ ] Add accessibility features

- Phase 4: Polish & Testing
  - [ ] Cross-browser testing
  - [ ] Mobile responsiveness check
  - [ ] Performance optimization
  - [ ] User testing with target audience
