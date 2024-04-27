import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then(response => response.json())
      .then(data => {
        setUser(data.results[0]);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  if (!user) return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5 border border-black">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border-2 border m-2 w-full md:w-4/5 xl:w-3/5" style={{ minHeight: '60vh' }}>
        <div className="md:w-1/2 w-full bg-cover bg-center p-4 md:p-10 bg-gradient-to-r from-blue-400 via-blue-500 to-violet-500">
          <picture>
            <source media="(min-width: 768px)" srcSet={user.picture.large} />
            <source media="(min-width: 375px)" srcSet={user.picture.medium} />
            <img src={user.picture.thumbnail} alt={`${user.name.first} ${user.name.last}`} className="w-full h-auto" />
          </picture>
        </div>
        <div className="md:w-1/2 w-full p-4 md:p-10">
          <h1 className="text-gray-900 font-bold text-3xl">{`${user.name.first} ${user.name.last}`}</h1>
          <p className="mt-4 text-gray-600 text-lg">{user.gender}</p>
          <p className="mt-2 text-gray-600 text-lg">{user.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
