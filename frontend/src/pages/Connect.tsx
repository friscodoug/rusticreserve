import React from 'react';
import { Camera, Facebook, AtSign } from 'lucide-react';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import { COLORS, CONTACT, BRAND } from '../config/brand.config';
import './Connect.css';

export default function Connect() {
  return (
    <div className="page-container dark-theme">
      <BackButton />

      <div className="header-center">
        <Camera size={48} color={COLORS.secondary} />
        <h1 className="page-title center">Share Your Stay</h1>
      </div>

      <Card className="dark-card">
        <p className="description">
          Tag your stay and follow us for updates.
        </p>

        <div className="social-buttons">
          <button
            className="social-btn facebook"
            onClick={() => window.open(CONTACT.facebook, '_blank')}
          >
            <Facebook size={28} color="white" />
            <span>Follow on Facebook</span>
          </button>
        </div>

        <div className="tag-box">
          <AtSign size={24} color={COLORS.secondary} />
          <p className="tag-text">Tag your stay</p>
          <p className="handle-text">@{BRAND.shortName.replace(/\s+/g, '')}</p>
        </div>

        <div className="hashtag-container">
          <p className="hashtag-title">Popular Hashtags</p>
          <div className="hashtags">
            <span>#{BRAND.shortName.replace(/\s+/g, '')}</span>
            <span>#BrokenBowCabins</span>
            <span>#OklahomaGetaway</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
