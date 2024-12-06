import styled from "@emotion/styled";

const MenuStyle = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .menuLists {
    position: absolute;
    right: 30px;
    top: 50px;
    background-color: yellow;
  }
  .menuListDiv {
    display: flex;
    justify-content: center;
    gap: 30px;

    border: 3px solid black;
  }
  .menuListDiv div {
  }
  .menuLists ul {
    position: relative;
    align-items: center;
    top: 30px;
  }
`;

const Menual = () => {
  return (
    <MenuStyle>
      <nav className="menuLists">
        <div className="menuListDiv">
          <div>
            <a href="#">Menu-1</a>
            <ul>
              <li>submenu1</li>
              <li>submenu2</li>
              <li>submenu3</li>
              <li>submenu4</li>
            </ul>
          </div>
          <div>
            <a href="#">Menu-2</a>
            <ul>
              <li>submenu1</li>
              <li>submenu2</li>
              <li>submenu3</li>
              <li>submenu4</li>
            </ul>
          </div>
          <div>
            <a href="#">Menu-3</a>
            <ul>
              <li>submenu1</li>
              <li>submenu2</li>
              <li>submenu3</li>
              <li>submenu4</li>
            </ul>
          </div>
          <div>
            <a href="#">Menu-4</a>
            <ul>
              <li>submenu1</li>
              <li>submenu2</li>
              <li>submenu3</li>
              <li>submenu4</li>
            </ul>
          </div>
        </div>
      </nav>
    </MenuStyle>
  );
};

export default Menual;
