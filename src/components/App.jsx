import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import './App.css';

export const App = () => {
  return (
    <div>
      <h2>Social media profile</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Statistics</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Friends List</h2>
      <FriendList friends={friends} />
      <h2>Transaction History</h2>
      <TransactionHistory items={transactions} />;
    </div>
  );
};
