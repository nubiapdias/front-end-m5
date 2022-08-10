import { DateTime } from "luxon";
import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/menu";
import * as Styled from "./style";
import { mockedProducts } from "../../mocks";
import ProductsList from "../../components/ProductList";
import { mockedCategories } from "../../mocks";
import { Dispatch, SetStateAction, useState } from "react";
import { Category, Product } from "../../types";
import OrderDetails from "../../components/OrderDetails";

interface HomeProps {
  setLogged: Dispatch<SetStateAction<boolean>>;
}

const Home = ({ setLogged }: HomeProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    mockedCategories[0]
  );

  const filteredProducts: Product[] = mockedProducts.filter(
    (element) => element.categoryId === selectedCategory.id
  );

  const actualDate = DateTime.now();
  const formatedDate = `${actualDate.weekdayShort}, ${actualDate.day} ${actualDate.monthLong} ${actualDate.year}`;

  return (
    <Styled.HomeContainer>
      <Menu path="home" setLogged={setLogged} />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <Styled.TitleContainer>
            <h1>Coffee House</h1>
            <p>{formatedDate}</p>
          </Styled.TitleContainer>
          <Styled.SearchInputContainer>
            <SearchIcon />
            <input placeholder="Pesquise aqui!" />
          </Styled.SearchInputContainer>
        </Styled.HomeContentHeader>
        <section>
          <Styled.CategoriesNavigationBar>
            {mockedCategories.map((element) => {
              return (
                <Styled.CategoriesNavigationButton
                  active={element.name === selectedCategory.name}
                  onClick={() => setSelectedCategory(element)}
                >
                  {element.name}
                </Styled.CategoriesNavigationButton>
              );
            })}
          </Styled.CategoriesNavigationBar>
          <Styled.ProductsHeaderContainer>
            <h2>Escolha sua bebida</h2>
            <Styled.TableSelect defaultValue="">
              <option value="" disabled>
                Selecione sua Poltrona
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Styled.TableSelect>
          </Styled.ProductsHeaderContainer>
          <ProductsList list={filteredProducts} />
        </section>
      </Styled.HomeContentContainer>
      <OrderDetails />
    </Styled.HomeContainer>
  );
};

export default Home;