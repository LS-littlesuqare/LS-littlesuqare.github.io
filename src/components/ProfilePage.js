import React from 'react';

const ProfilePage = ({ user }) => {
    return (
        <div className="profile-page">
            <h1>{user.name}'s Profile</h1>
            <img src={user.avatar} alt={`${user.name}'s avatar`} />
            <p>Account ID: {user.id}</p>
            <p>Bio: {user.bio}</p>
        </div>
    );
};

export default ProfilePage;