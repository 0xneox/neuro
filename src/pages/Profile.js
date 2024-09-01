import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { getProfileDashboard } from '../services/api';
import useApi from '../hooks/useApi';
import Navbar from '../components/Navbar';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ProfileWrapper = styled(motion.div)`
  padding: 20px;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Username = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const Level = styled.p`
  margin: 5px 0 0;
  font-size: 14px;
  opacity: 0.8;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  text-align: center;
`;

const StatValue = styled.h3`
  margin: 0;
  font-size: 24px;
`;

const StatLabel = styled.p`
  margin: 5px 0 0;
  font-size: 12px;
  opacity: 0.8;
`;

const ChartContainer = styled.div`
  height: 200px;
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 15px;
  font-size: 18px;
`;

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const { execute: fetchProfile, loading, error } = useApi(getProfileDashboard);

  useEffect(() => {
    fetchProfile().then(setProfile);
  }, [fetchProfile]);

  if (loading) return <ProfileWrapper>Loading profile...</ProfileWrapper>;
  if (error) return <ProfileWrapper>Error loading profile: {error.message}</ProfileWrapper>;

  const activityData = [
    { name: 'Mon', xp: 1000 },
    { name: 'Tue', xp: 1500 },
    { name: 'Wed', xp: 1200 },
    { name: 'Thu', xp: 1800 },
    { name: 'Fri', xp: 2000 },
    { name: 'Sat', xp: 1700 },
    { name: 'Sun', xp: 1900 },
  ];

  return (
    <ProfileWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        <Avatar src={profile?.avatar} alt={profile?.username} />
        <UserInfo>
          <Username>{profile?.username}</Username>
          <Level>Level: {profile?.level}</Level>
        </UserInfo>
      </Header>

      <StatsGrid>
        <StatCard whileHover={{ scale: 1.05 }}>
          <StatValue>{profile?.xp.toLocaleString()}</StatValue>
          <StatLabel>XP</StatLabel>
        </StatCard>
        <StatCard whileHover={{ scale: 1.05 }}>
          <StatValue>{profile?.computePower}</StatValue>
          <StatLabel>Compute Power</StatLabel>
        </StatCard>
        <StatCard whileHover={{ scale: 1.05 }}>
          <StatValue>{profile?.totalTaps}</StatValue>
          <StatLabel>Total Taps</StatLabel>
        </StatCard>
      </StatsGrid>

      <SectionTitle>Activity Graph</SectionTitle>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={activityData}>
            <XAxis dataKey="name" stroke="#ffffff" />
            <YAxis stroke="#ffffff" />
            <Tooltip />
            <Line type="monotone" dataKey="xp" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>

      <Navbar />
    </ProfileWrapper>
  );
};

export default Profile;