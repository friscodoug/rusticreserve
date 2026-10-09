/**
 * BRAND CONFIGURATION FILE - THE RUSTIC RESERVE
 * ==============================================
 * 
 * LUXURY DARK THEME - Black background with gold accents
 * Single cabin property - skips cabin selection
 * 
 * This is the SINGLE SOURCE OF TRUTH for all brand-specific content.
 */

// ===========================================
// BRAND IDENTITY
// ===========================================
export const BRAND = {
  // Core brand info
  name: 'The Rustic Reserve',
  shortName: 'Rustic Reserve',
  tagline: 'Where Luxury Slows Down.',
  description: 'Digital guest portal for The Rustic Reserve',
  location: 'Broken Bow, Oklahoma',
  address: '101 Scrub Oak Trl, Broken Bow, OK 74728',
  
  // Welcome page
  welcomeHeadline: 'Welcome to The Rustic Reserve',
  welcomeSubtext: 'Your luxury cabin retreat awaits.',
  
  // Cabin Mode branding
  cabinModeTagline: 'a guided stay experience brought to you by',
  
  // Come Back page
  comeBackHeadline: 'Come Back Soon!',
  comeBackSubtext: 'Return to The Rustic Reserve.',
  discountCode: 'RUSTIC10',
  discountAmount: '10% OFF',
  bookingUrl: 'https://therusticreserve.com/',
  bookingText: 'Direct Booking on our website',
  
  // Explore page (replaces sister properties)
  exploreTitle: 'Explore',
  exploreSubtitle: 'Things to do in Broken Bow',
  exploreUrl: 'https://therusticreserve.com/explore/',
  
  // Single cabin mode - skip cabin selection
  singleCabinMode: true,
};

// ===========================================
// COLORS & THEME - LUXURY DARK THEME
// ===========================================
export const COLORS = {
  // Primary brand colors - Dark Luxury
  primary: '#1A1A1A',      // Near black - main backgrounds
  secondary: '#C9A962',    // Gold - accents, buttons
  
  // Background colors
  background: '#0D0D0D',   // Dark black - page backgrounds
  cardBackground: '#1A1A1A', // Slightly lighter black for cards
  
  // Text colors
  text: '#F5F5F5',         // Off-white - main text
  textLight: '#A0A0A0',    // Gray - secondary text
  textGold: '#C9A962',     // Gold - accent text
  
  // Utility colors
  white: '#FFFFFF',
  lightGray: '#333333',
  success: '#4CAF50',
  error: '#E74C3C',
  warning: '#F59E0B',
  
  // Feature-specific colors
  campfireOrange: '#C9A962',  // Gold for campfire
  cabinModeGreen: '#C9A962',  // Gold for cabin mode
  weatherBlue: '#C9A962',     // Gold for weather
};

// ===========================================
// LOGOS & IMAGES
// ===========================================
export const IMAGES = {
  // Main logo
  logo: '/rustic-reserve-logo.png',
  
  // Cabin Mode logo
  cabinModeLogo: '/cabin-mode-logo.png',
  
  // Favicon/App icon
  favicon: '/rustic-reserve-logo.png',
  appIcon192: '/rustic-reserve-logo.png',
  appIcon512: '/rustic-reserve-logo.png',
  
  // Single cabin image
  cabinImage: 'https://customer-assets-jt897jd0.emergentagent.net/job_937b1701-e091-472c-bea4-8ba39c7f7d7d/artifacts/eee3cdbc18beb0a5_Scrub%20Oak%20%2830%29.png',
};

// ===========================================
// CONTACT INFORMATION
// ===========================================
export const CONTACT = {
  // Host info
  hostName: 'Steve & Lori',
  phone: '727-723-4222',
  email: 'kiamichipropertygroupllc@gmail.com',
  
  // Social media - Facebook only (no Instagram)
  instagram: null,
  instagramHandle: null,
  facebook: 'https://www.facebook.com/profile.php?id=61593160196143',
  facebookName: 'The Rustic Reserve',
  
  // Website
  website: 'https://therusticreserve.com/',
  
  // Newsletter
  newsletterName: 'VIP Guest List',
  newsletterUrl: 'https://therusticreserve.com/vip/',
  newsletterDescription: 'Join our VIP Guest List for exclusive deals and updates.',
};

// ===========================================
// PROPERTIES / CABINS - SINGLE CABIN
// ===========================================
export interface Property {
  id: string;
  name: string;
  slug: string;
  image: string;
  guidebookUrl: string;
}

export const PROPERTIES: Property[] = [
  {
    id: '1',
    name: 'The Rustic Reserve',
    slug: 'rustic-reserve',
    image: 'https://customer-assets-jt897jd0.emergentagent.net/job_937b1701-e091-472c-bea4-8ba39c7f7d7d/artifacts/eee3cdbc18beb0a5_Scrub%20Oak%20%2830%29.png',
    guidebookUrl: 'https://drive.google.com/file/d/1ecfHVDFLl78Hmh2cCp6T_ZI2OnZZYsrd/view?usp=drive_link',
  },
];

// ===========================================
// LOCATION & WEATHER
// ===========================================
export const LOCATION = {
  // For weather API (Broken Bow, OK)
  latitude: 34.03,
  longitude: -94.74,
  cityName: 'Broken Bow',
  stateName: 'Oklahoma',
  
  // Display
  displayLocation: 'Broken Bow, Oklahoma',
};

// ===========================================
// APP METADATA (for index.html & manifest.json)
// ===========================================
export const APP_META = {
  title: 'The Rustic Reserve Guest Portal',
  description: 'The Rustic Reserve - Where Luxury Slows Down',
  themeColor: '#0D0D0D',
  backgroundColor: '#0D0D0D',
};


// ===========================================
// LEGACY EXPORTS (for backward compatibility)
// ===========================================
export const CABINS = PROPERTIES;
export const LOGO_URL = IMAGES.logo;
export const CABIN_MODE_LOGO_URL = IMAGES.cabinModeLogo;
