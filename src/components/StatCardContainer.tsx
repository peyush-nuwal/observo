import React from 'react'
import StatCard from './StatCard'
import { socialStats } from '@/lib/data';

const StatCardContainer = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      {socialStats.map((soc, idx) => (
        <StatCard
          key={idx}
          platform={soc.platform}
          icon={<soc.icon className="stroke-1" />}
          followers={soc.followers}
          gained={soc.gained}
          index={idx}
        />
      ))}
    </div>
  );
}

export default StatCardContainer