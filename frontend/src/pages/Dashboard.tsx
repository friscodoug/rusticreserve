import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Gift, Mail, Share2, HelpCircle, ChevronRight, CloudSun, Flame, Compass } from 'lucide-react';
import Card from '../components/Card';
import { COLORS, IMAGES, CONTACT, LOCATION, BRAND } from '../config/brand.config';
import { useCabin } from '../context/CabinContext';
import './Dashboard.css';

interface MenuItem {
  id: string;
  title: string;
  subtitle: string;
  icon?: React.ComponentType<{ size: number; color: string }>;
  imageIcon?: string;
  route?: string;
  externalUrl?: string;
  color: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: '1', title: 'Digital Guidebook', subtitle: 'Everything you need to know', icon: Book, route: '/guidebook', color: COLORS.secondary },
  { id: '2', title: 'Weather', subtitle: `5-day forecast for ${LOCATION.cityName}`, icon: CloudSun, route: '/weather', color: COLORS.secondary },
  { id: '3', title: 'Cabin Mode', subtitle: 'Disconnect and enjoy nature', imageIcon: IMAGES.cabinModeLogo, route: '/cabin-mode', color: COLORS.secondary },
  { id: '4', title: 'Campfire Mode', subtitle: 'Games and stories for the family', icon: Flame, route: '/campfire-mode', color: COLORS.secondary },
  { id: '5', title: 'Come Back & Save', subtitle: "Exclusive returning guest discount", icon: Gift, route: '/come-back', color: COLORS.secondary },
  { id: '6', title: BRAND.exploreTitle || 'Explore', subtitle: BRAND.exploreSubtitle || 'Things to do nearby', icon: Compass, externalUrl: BRAND.exploreUrl, color: COLORS.secondary },
  { id: '7', title: `Join ${CONTACT.newsletterName}`, subtitle: 'Get exclusive deals and updates', icon: Mail, route: '/newsletter', color: COLORS.secondary },
  { id: '8', title: 'Connect With Us', subtitle: 'Follow us on social media', icon: Share2, route: '/connect', color: COLORS.secondary },
  { id: '9', title: 'Need Help', subtitle: "We're here for you", icon: HelpCircle, route: '/help', color: COLORS.secondary },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const { selectedCabin } = useCabin();

  const handleItemClick = (item: MenuItem) => {
    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank');
    } else if (item.route) {
      navigate(item.route);
    }
  };

  if (!selectedCabin) {
    navigate('/');
    return null;
  }

  return (
    <div className="page-container dark-theme">
      <div className="dashboard-header">
        <p className="welcome-text">Welcome to</p>
        <h1 className="cabin-name-title">{selectedCabin.name}</h1>
      </div>

      <Card className="banner-card dark-card">
        <img src={selectedCabin.image} alt={selectedCabin.name} className="banner-image" />
      </Card>

      <div className="menu-grid">
        {MENU_ITEMS.map((item) => (
          <Card key={item.id} className="menu-item dark-card" onClick={() => handleItemClick(item)}>
            <div className={`icon-container ${item.imageIcon ? 'image-icon' : 'gold-icon'}`}>
              {item.imageIcon ? (
                <img src={item.imageIcon} alt={item.title} className="menu-image-icon" />
              ) : item.icon ? (
                <item.icon size={28} color="#0D0D0D" />
              ) : null}
            </div>
            <div className="menu-text">
              <span className="menu-title">{item.title}</span>
              <span className="menu-subtitle">{item.subtitle}</span>
            </div>
            <ChevronRight size={20} color={COLORS.secondary} />
          </Card>
        ))}
      </div>
    </div>
  );
}
