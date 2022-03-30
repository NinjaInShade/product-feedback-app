import React from 'react';
import '../styles/status-card.css';

export default function StatusCard({ data }) {
  return <div className={`status-card ${data.status}`}>StatusCard</div>;
}
