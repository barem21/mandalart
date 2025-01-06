import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollTop";
import { UserInfoProvider } from "./contexts/UserInfoContext";
import Loading from "./components/Loading";

const LazyIndex = lazy(() => import("./pages/Index"));
const LazyAbout = lazy(() => import("./pages/About"));
const LazyMypage = lazy(() => import("./pages/myplan/ListMandalart"));
const LazyAddMandalart = lazy(() => import("./pages/myplan/AddMandalart"));
const LazyViewMandalart = lazy(() => import("./pages/myplan/ViewMandalart"));
const LazyViewCalendar = lazy(() => import("./pages/myplan/ViewCalendar"));
const LazyEditMandalart = lazy(() => import("./pages/myplan/EditMandalart"));
const LazyListMandalart = lazy(() => import("./pages/share/ListMandalart"));
const LazyAddShareMandalart = lazy(() => import("./pages/share/AddMandalart"));
const LazyViewShareMandalart = lazy(
  () => import("./pages/share/ViewMandalart"),
);
const LazyEditShareMandalart = lazy(
  () => import("./pages/share/EditMandalart"),
);
const LazyCalendar = lazy(() => import("./pages/Calendar"));
const LazyLoginPage = lazy(() => import("./pages/member/LoginPage"));
const LazyLogoutPage = lazy(() => import("./pages/member/LogoutPage"));
const LazyChangePwPage = lazy(() => import("./pages/member/ChangePwPage"));
const LazyJoinPage = lazy(() => import("./pages/member/JoinPage"));
const LazyJoinEndPage = lazy(() => import("./pages/member/JoinEndPage"));
const LazyModifyPage = lazy(() => import("./pages/member/EditPage"));
const LazyNotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <UserInfoProvider>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyIndex />
                </Suspense>
              }
            />

            {/* 만다라트란? */}
            <Route
              path="/about"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyAbout />
                </Suspense>
              }
            />

            {/* 나의 만다라트 */}
            <Route path="/myplan">
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyMypage />
                  </Suspense>
                }
              />
              <Route
                path="/myplan/add"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyAddMandalart />
                  </Suspense>
                }
              />
              <Route
                path="/myplan/view"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyViewMandalart />
                  </Suspense>
                }
              />
              <Route
                path="/myplan/calendar"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyViewCalendar />
                  </Suspense>
                }
              />
              <Route
                path="/myplan/edit"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyEditMandalart />
                  </Suspense>
                }
              />
            </Route>

            {/* 만다라트 공유 */}
            <Route path="/share">
              <Route
                index
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyListMandalart />
                  </Suspense>
                }
              />
              <Route
                path="/share/add"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyAddShareMandalart />
                  </Suspense>
                }
              />
              <Route
                path="/share/view"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyViewShareMandalart />
                  </Suspense>
                }
              />
              <Route
                path="/share/edit"
                element={
                  <Suspense fallback={<Loading />}>
                    <LazyEditShareMandalart />
                  </Suspense>
                }
              />
            </Route>

            {/* 계획표 캘린더 */}
            <Route
              path="/calendar"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyCalendar />
                </Suspense>
              }
            />

            {/* 로그인 */}
            <Route
              path="/login"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyLoginPage />
                </Suspense>
              }
            />

            {/* 로그아웃 */}
            <Route path="/logout" element={<LazyLogoutPage />} />

            {/* 임시 비밀번호 발급 */}
            <Route path="/change" element={<LazyChangePwPage />} />

            {/* 회원가입 */}
            <Route
              path="/join"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyJoinPage />
                </Suspense>
              }
            />

            {/* 회원가입 완료 */}
            <Route path="/joinEnd" element={<LazyJoinEndPage />} />

            {/* 회원정보 수정 */}
            <Route
              path="/modify"
              element={
                <Suspense fallback={<Loading />}>
                  <LazyModifyPage />
                </Suspense>
              }
            />

            {/* 잘못된 패스 */}
            <Route path="*" element={<LazyNotFoundPage />} />
          </Routes>
        </Layout>
      </UserInfoProvider>
    </Router>
  );
}

export default App;
