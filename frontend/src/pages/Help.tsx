import React from 'react';
import { LifeBuoy, Phone, MessageCircle, ChevronRight, Info, AlertTriangle } from 'lucide-react';
import BackButton from '../components/BackButton';
import Card from '../components/Card';
import { COLORS, CONTACT } from '../config/brand.config';
import './Help.css';

export default function Help() {
  return (
    <div className="page-container dark-theme">
      <BackButton />

      <div className="header-center">
        <LifeBuoy size={48} color={COLORS.secondary} />
        <h1 className="page-title center">Need Assistance?</h1>
        <p className="header-subtext">We're here to help make your stay perfect.</p>
      </div>

      <Card className="contact-card dark-card">
        <div className="section-header">
          <h2 className="section-title">Contact Your Hosts</h2>
          <span className="host-name">{CONTACT.hostName}</span>
        </div>
        
        <a href={`tel:${CONTACT.phone}`} className="contact-btn">
          <div className="icon-circle gold">
            <Phone size={24} color="#0D0D0D" />
          </div>
          <div className="contact-info">
            <span className="contact-label">Call Us</span>
            <span className="contact-value">{CONTACT.phone}</span>
          </div>
          <ChevronRight size={22} color={COLORS.secondary} />
        </a>

        <a href={`sms:${CONTACT.phone}`} className="contact-btn last">
          <div className="icon-circle gold">
            <MessageCircle size={24} color="#0D0D0D" />
          </div>
          <div className="contact-info">
            <span className="contact-label">Text Us</span>
            <span className="contact-value">{CONTACT.phone}</span>
          </div>
          <ChevronRight size={22} color={COLORS.secondary} />
        </a>
      </Card>

      <Card className="info-card dark-card">
        <Info size={24} color={COLORS.secondary} />
        <div className="info-content">
          <h3 className="info-title">Response Times</h3>
          <p className="info-text">
            We typically respond within 30 minutes during daytime hours. For urgent matters, please call directly.
          </p>
        </div>
      </Card>

      <div className="emergency-card">
        <AlertTriangle size={24} color="#E74C3C" />
        <p>For emergencies, please call 911 first, then contact us.</p>
      </div>
    </div>
  );
}
