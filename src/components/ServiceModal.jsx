// src/components/ServiceModal.jsx
import { X } from 'lucide-react';

const servicesData = {
  air: {
    title: 'Air Freight',
    description: 'Time-critical shipments delivered with precision...',
    features: ['24-48hr Express Delivery', 'Hazmat Certified', 'Charter Options']
  },
  sea: {
    title: 'Sea Freight',
    description: 'Economical ocean transport for bulk cargo...',
    features: ['Door-to-Door Service', 'Customs Clearance', 'Volume Discounts']
  },
  land: {
    title: 'Land Transport',
    description: 'Seamless ground transportation across continents...',
    features: ['GPS Tracking', 'Cross-Border Expertise', 'Flexible Scheduling']
  },
  cold: {
    title: 'Cold Chain',
    description: 'Temperature-controlled logistics for sensitive cargo...',
    features: ['2-8°C Controlled', 'Pharma Compliant', 'Real-time Monitoring']
  }
};

export default function ServiceModal({ serviceId, onClose }) {
  const service = servicesData[serviceId];

  if (!service) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
      onClick={onClose}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bg-dark border border-primary text-light" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header border-bottom border-primary">
            <h5 className="modal-title fw-bold text-primary">{service.title}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <p className="text-secondary mb-4">{service.description}</p>
            <h6 className="fw-bold mb-3">Key Features:</h6>
            <ul className="list-unstyled">
              {service.features.map((f, i) => (
                <li key={i} className="mb-2">
                  <span className="text-primary me-2">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="modal-footer border-top border-primary">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Request Quote for {service.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}