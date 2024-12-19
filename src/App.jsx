import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import Mypage from "./pages/myplan/ListMandalart";
import NotFoundPage from "./pages/NotFoundPage";
import Calendar from "./pages/Calendar";
import LoginPage from "./pages/member/LoginPage";
import JoinPage from "./pages/member/JoinPage";
import EditPage from "./pages/member/EditPage";
import ListMandalart from "./pages/share/ListMandalart";
import WriteMandalart from "./pages/myplan/WriteMandalart";
import WriteShareMandalart from "./pages/share/WriteMandalart";
import DetailShareMandalart from "./pages/share/DetailMandalart";
import DetailMandalart from "./pages/myplan/DetailMandalart";
import EditMandalart from "./pages/myplan/EditMandalart";
import EditShareMandalart from "./pages/share/EditMandalart";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* 만다라트란? */}
          <Route path="/about" element={<About />} />

          {/* 나의 만다라트 */}
          <Route path="/myplan">
            <Route index element={<Mypage />} />
            <Route path="/myplan/add" element={<WriteMandalart />} />
            <Route path="/myplan/detail" element={<DetailMandalart />} />
            <Route path="/myplan/edit" element={<EditMandalart />} />
          </Route>

          {/* 만다라트 공유 */}
          <Route path="/share">
            <Route index element={<ListMandalart />} />
            <Route path="/share/add" element={<WriteShareMandalart />} />
            <Route path="/share/detail" element={<DetailShareMandalart />} />
            <Route path="/share/edit" element={<EditShareMandalart />} />
          </Route>

          {/* 계획표 캘린더 */}
          <Route path="/calendar" element={<Calendar />} />

          {/* 로그인 */}
          <Route path="/login" element={<LoginPage />} />

          {/* 회원가입 */}
          <Route path="/join" element={<JoinPage />} />

          {/* 회원정보 수정 */}
          <Route path="/edit" element={<EditPage />} />

          {/* 잘못된 패스 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
