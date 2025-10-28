import React from "react";
import "./FeaturedProviders.css";
import provider1 from "../../assets/provider1.png"; // replace with real images
import provider2 from "../../assets/provider2.png";
import provider3 from "../../assets/provider3.png";
import provider4 from "../../assets/provider4.png";

function FeaturedProviders() {
  const providers = [
    { id: 1, name: "John Builders", category: "Construction", img: provider1 },
    { id: 2, name: "Elite Plumbing", category: "Plumbing", img: provider2 },
    { id: 3, name: "Smart Electricians", category: "Electrical", img: provider3 },
    { id: 4, name: "Perfect Interiors", category: "Interior Design", img: provider4 },
  ];

  return (
    <section className="featured">
      <h2>Featured Providers</h2>
      <p>Discover the top-rated professionals ready to work with you.</p>

      <div className="featured-grid">
        {providers.map((provider) => (
          <div key={provider.id} className="provider-card">
            <img src={provider.img} alt={provider.name} />
            <div className="provider-info">
              <h3>{provider.name}</h3>
              <p>{provider.category}</p>
              <button>View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProviders;
