import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import { COLORS, IMAGES, BRAND, LOCATION, PROPERTIES } from '../config/brand.config';
import { useCabin } from '../context/CabinContext';
import './Welcome.css';

export default function Welcome() {
  const navigate = useNavigate();
  const { selectedCabin, selectCabin, isLoading } = useCabin();

  useEffect(() => {
    // For single cabin mode, auto-select the cabin if not already selected
    if (!isLoading && BRAND.singleCabinMode && !selectedCabin && PROPERTIES.length === 1) {
      selectCabin(PROPERTIES[0]);
    }
  }, [isLoading, selectedCabin, selectCabin]);

  if (isLoading) {
    return (
      <div className="welcome-container dark-theme">
        <div className="loading">
          <Sparkles size={40} color={COLORS.secondary} />
          <p style={{ color: COLORS.text }}>Loading...</p>
        </div>
      </div>
    );
  }

  const handleContinue = () => {
    // For single cabin mode, go directly to dashboard
    if (BRAND.singleCabinMode && PROPERTIES.length === 1) {
      selectCabin(PROPERTIES[0]);
      navigate('/dashboard');
    } else {
      navigate('/cabin-selection');
    }
  };

  return (
    <div className="welcome-container dark-theme">
      <div className="welcome-content">
        <div className="cabin-mode-logo-container">
          <img src={IMAGES.cabinModeLogo} alt="Cabin Mode" className="cabin-mode-logo" />
        </div>
        <p className="cabin-mode-tagline">{BRAND.cabinModeTagline}</p>
        <div className="logo-container">
          <img src={IMAGES.logo} alt={BRAND.name} className="logo logo-large" />
        </div>

        <Card className="welcome-card dark-card">
          <h1 className="headline">{BRAND.welcomeHeadline}</h1>
          <Sparkles size={32} color={COLORS.secondary} className="bear-icon" />
          <p className="subtext">{BRAND.tagline}</p>
          <p className="instruction">{BRAND.welcomeSubtext}</p>
          
          <button className="continue-btn gold-btn" onClick={handleContinue}>
            <span>Continue</span>
            <ArrowRight size={20} color="#0D0D0D" />
          </button>
        </Card>

        <div className="footer">
          <MapPin size={16} color={COLORS.secondary} />
          <span>{LOCATION.displayLocation}</span>
        </div>
      </div>
    </div>
  );
}
