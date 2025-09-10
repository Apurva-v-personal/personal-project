import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JSXPlayground from "./JSXPlayground";


export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1>Day 2 — JSX Deep Dive</h1>
      <JSXPlayground />
    </div>
  );
}

// export default function App() {
//   return (
//     <div style={styles.page}>
//       <h1 style={styles.title}>Hello, React 👋</h1>
//       <UserCard name="Apurva" role="React Beginner" />
//     </div>
//   )
// }

function UserCard({ name, role }) {
  return (
    <div style={cardStyles.wrapper}>
      <div style={cardStyles.avatar}>{name[0]}</div>
      <div>
        <div style={cardStyles.name}>{name}</div>
        <div style={cardStyles.role}>{role}</div>
      </div>
    </div>
  )
}

const styles = {
  page: { minHeight: '100vh', display: 'grid', placeItems: 'center', gap: 16, textAlign: 'center', fontFamily: 'system-ui, Arial' },
  title: { margin: 0, fontSize: '2.2rem' }
}

const cardStyles = {
  wrapper: { display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: 12, minWidth: 260 },
  avatar: { width: 40, height: 40, borderRadius: '50%', display: 'grid', placeItems: 'center', fontWeight: 700, background: '#f3f4f6' },
  name: { fontWeight: 600 },
  role: { fontSize: 12, opacity: 0.7 }
}
