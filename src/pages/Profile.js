import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUsers } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import defaultAvatar from "../Images/second.png";
import backgroundImage from "../Images/bg5.jpg";
import logoLeft from "../Images/logoo.png";
import logoRight from "../Images/logo1.png";

const ProfileWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background-color: #000033;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 80px 20px 70px;
  overflow-y: auto;
`;

const UserSection = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled(motion.img)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserDetails = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const Username = styled.h2`
  margin: 0;
  font-size: 20px;
`;

const UserID = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const CPLevel = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 10px;
`;

const Button = styled(motion.button)`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2563eb;
  }
`;

const StatsGrid = styled(motion.div)`
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

const ChartContainer = styled(motion.div)`
  height: 200px;
  margin-bottom: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
`;

const SectionTitle = styled(motion.h3)`
  margin-bottom: 15px;
  font-size: 18px;
  padding-left: 15px;
`;

const Profile = () => {
  // Mock data
  const mockUser = {
    username: 'John Doe',
    id: '5856722860',
    cpLevel: '5',
    avatar: defaultAvatar,
    xp: 15000,
    computePower: 250,
    totalTaps: 5000,
    referrals: 10
  };

  const activityData = [
    { name: 'Mon', xp: 1000 },
    { name: 'Tue', xp: 1500 },
    { name: 'Wed', xp: 1200 },
    { name: 'Thu', xp: 1800 },
    { name: 'Fri', xp: 2000 },
    { name: 'Sat', xp: 1700 },
    { name: 'Sun', xp: 1900 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

  const wobbleVariants = {
    hover: {
      rotate: [0, -1, 1, -1, 1, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <ProfileWrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Header>
        <Logo src={logoLeft} alt="Left Logo" />
        <Logo src={logoRight} alt="Right Logo" />
      </Header>

      <ContentWrapper>
        <UserSection variants={itemVariants}>
          <UserInfo>
            <Avatar 
              src={mockUser.avatar} 
              alt={mockUser.username} 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            />
            <UserDetails variants={wobbleVariants} whileHover="hover">
              <Username>{mockUser.username}</Username>
              <UserID>ID: {mockUser.id}</UserID>
              <CPLevel>CP Level: {mockUser.cpLevel}</CPLevel>
            </UserDetails>
          </UserInfo>
          <ButtonGroup>
            <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Join Channel</Button>
            <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><FaUsers /> {mockUser.referrals}
            </Button>
          </ButtonGroup>
        </UserSection>

        <StatsGrid variants={itemVariants}>
          {[
            { value: mockUser.xp.toLocaleString(), label: 'XP' },
            { value: mockUser.computePower, label: 'Compute Power' },
            { value: mockUser.totalTaps.toLocaleString(), label: 'Total Taps' }
          ].map((stat, index) => (
            <StatCard 
              key={index} 
              whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <StatValue>{stat.value}</StatValue>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <SectionTitle variants={itemVariants}>Activity Graph</SectionTitle>
        <ChartContainer 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={activityData}>
              <XAxis dataKey="name" stroke="#ffffff" />
              <YAxis stroke="#ffffff" />
              <Tooltip />
              <Line type="monotone" dataKey="xp" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </ContentWrapper>

      <Navbar />
    </ProfileWrapper>
  );
};

export default Profile;