import UIFramework from "ui-library";

// Section templates
import EducationBlockA from "components/Education/BlockA";
import EducationBlockB from "components/Education/BlockB";

import AchievementBlockA from "components/Achievements/BlockA";
import AchievementBlockB from "components/Achievements/BlockB";

import CertificationBlockA from "components/Certifications/BlockA";
import CertificationBlockB from "components/Certifications/BlockB";

// Data sources
import educationData from "data/education";
import achievementData from "data/achievements";
import certificationData from "data/certifications";

// Icons
import { ArrowIcon } from "icon-library";

export default function EducationPage() {
  return (
    <section className="page-wrapper">
      <header className="page-header">
        <h1>Education</h1>
      </header>

      {/* Education timeline */}
      <div className="content-section">
        {educationData.map((item, index) =>
          index % 2 === 0 ? (
            <EducationBlockA key={item.id} data={item} />
          ) : (
            <EducationBlockB key={item.id} data={item} />
          )
        )}
      </div>

      <header className="page-header secondary">
        <h1>Achievements & Certifications</h1>
      </header>

      <div className="dual-column-layout">
        {/* Achievements */}
        <div className="column">
          <h2>Achievements</h2>
          {achievementData.map((item, index) =>
            index % 2 === 0 ? (
              <AchievementBlockA key={item.id} data={item} />
            ) : (
              <AchievementBlockB key={item.id} data={item} />
            )
          )}
        </div>

        {/* Certifications */}
        <div className="column">
          <h2>Certifications</h2>
          {certificationData.map((item, index) =>
            index % 2 === 0 ? (
              <CertificationBlockA key={item.id} data={item} />
            ) : (
              <CertificationBlockB key={item.id} data={item} />
            )
          )}
        </div>
      </div>

      {/* External learning profile */}
      <div className="action-center">
        <a
          href="https://learning-platform.example/profile"
          target="_blank"
          className="action-button"
        >
          Show more <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
