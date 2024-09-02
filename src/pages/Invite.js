import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { generateReferralCode, applyReferralCode, getReferralStats } from '../services/api';
import useApi from '../hooks/useApi';
import Navbar from '../components/Navbar';
import { FaUsers, FaCopy, FaShareAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import defaultAvatar from "../Images/second.png";
import logo from '../Images/logoo.png';
import neuro from '../Images/logo1.png';
import backgroundImage from "../Images/bg5.jpg";

const InviteWrapper = styled(motion.div)`
  position: relative;
  min-height: 100vh;
  width: 100vw;
  color: #ffffff;
  background: linear-gradient(180deg, #000033 0%, #000066 100%);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  position: fixed;
  top: 0;
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
  align-items: center;
  padding: 80px 20px 70px;
  overflow-y: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const CPLevel = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;

const Referrals = styled.div`
  display: flex;
  align-items: center;
`;

const ReferralIcon = styled(FaUsers)`
  margin-right: 5px;
`;

const RewardSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const RewardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  text-align: center;
`;

const RewardItem = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RewardInfo = styled.div`
  display: flex;
  align-items: center;
`;

const RewardText = styled.span`
  font-size: 16px;
`;

const ClaimButton = styled(motion.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
`;

const UsersCount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const InviteLinkSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const InviteLink = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.span`
  font-size: 14px;
  opacity: 0.8;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled(motion.button)`
  background: #3d85c6;
  color: #ffffff;
  border: none;
  padding: 8px 20px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BonusInfo = styled.div`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`;

const ReferralsList = styled.div`
  width: 100%;
`;

const ReferralsTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

const NoReferrals = styled.p`
  text-align: center;
  opacity: 0.8;
`;

const Invite = () => {
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState('');
  const [referralStats, setReferralStats] = useState(null);
  const { execute: generateCode } = useApi(generateReferralCode);
  const { execute: applyCode } = useApi(applyReferralCode);
  const { execute: fetchReferralStats } = useApi(getReferralStats);

  useEffect(() => {
    const initializeReferralCode = async () => {
      if (!user?.referralCode) {
        try {
          const { referralCode } = await generateCode();
          setReferralCode(referralCode);
        } catch (error) {
          console.error('Failed to generate referral code:', error);
        }
      } else {
        setReferralCode(user.referralCode);
      }
    };
    const fetchStats = async () => {
      try {
        const stats = await fetchReferralStats();
        setReferralStats(stats);
      } catch (error) {
        console.error('Failed to fetch referral stats:', error);
      }
    };

    initializeReferralCode();
    fetchStats();
  }, [user, generateCode, fetchReferralStats]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(`https://t.me/OfficialNeroBot?start=${referralCode}`);
    // Implement a toast or notification to show the link was copied
  };

  const handleShare = () => {
    // Implement share functionality
    // This could open a native share dialog on mobile devices
    if (navigator.share) {
      navigator.share({
        title: 'Join me on Neurolov!',
        text: 'Use my referral code to get started!',
        url: `https://t.me/OfficialNeroBot?start=${referralCode}`
      }).catch(console.error);
    } else {
      // Fallback for desktop or unsupported browsers
      handleCopyLink();
    }
  };

  const handleClaim = async (rewardId) => {
    // Implement claim functionality
    // This should call an API to claim the reward and update the UI
    console.log(`Claiming reward ${rewardId}`);
  };

  return (
    <InviteWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header>
        <Logo src={logo} alt="New Logo" />
        <Logo src={neuro} alt="Neurolov Logo" />
      </Header>

      <ContentWrapper>
        <Title>Refer and Earn</Title>
        <UserInfo>
          <UserDetail>
            <Avatar src={user?.avatar || defaultAvatar} alt="User Avatar" />
            <div>
              <UserName>{user?.username || 'User'}</UserName>
              <CPLevel>CP {user?.cpLevel || 1}</CPLevel>
            </div>
          </UserDetail>
          <Referrals>
            <ReferralIcon /> {referralStats?.totalReferrals || 0} Referrals
          </Referrals>
        </UserInfo>
       
        <RewardSection>
          <RewardTitle>Referral Rewards</RewardTitle>
          <AnimatePresence>
            {[
              { id: 1, friends: 1, reward: 10000 },
              { id: 2, friends: 3, reward: 50000 },
              { id: 3, friends: 5, reward: 150000 },
            ].map((item) => (
              <RewardItem
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <RewardInfo>
                  <ReferralIcon />
                  <RewardText>Invite {item.friends} friend{item.friends > 1 ? 's' : ''}</RewardText>
                </RewardInfo>
                <RewardText>{item.reward.toLocaleString()} XP</RewardText>
                <ClaimButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleClaim(item.id)}
                  disabled={referralStats?.totalReferrals < item.friends}
                >
                  {referralStats?.totalReferrals >= item.friends ? 'Claim' : 'Locked'}
                </ClaimButton>
              </RewardItem>
            ))}
          </AnimatePresence>
        </RewardSection>

        <UsersCount>{referralStats?.totalReferrals || 0} Users</UsersCount>

        <InviteLinkSection>
          <InviteLink>
            <LinkText>https://t.me/OfficialNeroBot?start={referralCode}</LinkText>
            <ButtonGroup>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyLink}
              >
                <FaCopy />
                Copy
              </ActionButton>
              <ActionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleShare}
              >
                <FaShareAlt />
                Share
              </ActionButton>
            </ButtonGroup>
          </InviteLink>
        </InviteLinkSection>

        <BonusInfo>Invite and get 0.5% Bonus for each friend</BonusInfo>

        <ReferralsList>
          <ReferralsTitle>My Referrals:</ReferralsTitle>
          {referralStats?.referrals && referralStats.referrals.length > 0 ? (
            referralStats.referrals.map((referral, index) => (
              <RewardItem key={index}>
                <UserDetail>
                  <Avatar src={referral.avatar || defaultAvatar} alt={referral.username} />
                  <UserName>{referral.username}</UserName>
                </UserDetail>
                <CPLevel>CP {referral.cpLevel}</CPLevel>
              </RewardItem>
            ))
          ) : (
            <NoReferrals>You don't have referrals yet 😢</NoReferrals>
          )}
        </ReferralsList>
      </ContentWrapper>
      <Navbar />
    </InviteWrapper>
  );
};

export default Invite;