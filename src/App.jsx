import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Mypage from "./pages/Mypage";
import NotFoundPage from "./pages/NotFoundPage";
import ShareMandalart from "./pages/ShareMandalart";
import Calendar from "./pages/Calendar";
import LoginPage from "./pages/member/LoginPage";
import JoinPage from "./pages/member/JoinPage";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* 만다라트란? */}
          <Route path="/about" element={<About />} />

          {/* 나의 만다라트 */}
          <Route path="/mypage" element={<Mypage />} />

          {/* 만다라트 공유 */}
          <Route path="/share" element={<ShareMandalart />} />

          {/* 계획표 캘린더 */}
          <Route path="/calendar" element={<Calendar />} />

          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />

          {/* 회원가입 */}
          <Route path="/join" element={<JoinPage />} />

          {/* 잘못된 패스 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
