import React from 'react';
import { Mail, Sparkles, Send } from 'lucide-react';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import { COLORS, CONTACT } from '../config/brand.config';
import './Newsletter.css';

const BENEFITS = [
  'Exclusive discounts',
  'Last-minute availability alerts',
  'Special offers & giveaways',
  'Local event announcements',
];

export default function Newsletter() {
  const handleSubscribe = () => {
    window.open(CONTACT.newsletterUrl, '_blank');
  };

  return (
    <div className="page-container dark-theme">
      <BackButton />

      <div className="header-center">
        <Mail size={48} color={COLORS.secondary} />
        <h1 className="page-title center">Join Our VIP List</h1>
      </div>

      <Card className="dark-card">
        <p className="description">Join the {CONTACT.newsletterName} for:</p>

        <div className="benefits-list">
          {BENEFITS.map((benefit, index) => (
            <div key={index} className="benefit-row">
              <Sparkles size={18} color={COLORS.secondary} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <button className="primary-btn" onClick={handleSubscribe}>
          <Send size={20} color="#0D0D0D" />
          <span>Join {CONTACT.newsletterName}</span>
        </button>

        <p className="privacy-text">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </Card>
    </div>
  );
}
