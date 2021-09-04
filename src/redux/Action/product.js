import { createAction } from ".";
import { productService } from "../../Services";
import { PETCH_PRODUCT , PETCH_PRODUCT_DETAIL} from "./type";

//async action
export const fetchProduct = () => {
  return (dispatch) => {
    productService
      .fetchProduct()
      .then((res) => {
        dispatch(createAction(PETCH_PRODUCT, res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchProductDetail = (id) => {
  return (dispatch) => {
    productService
      .fetchDetail(id)
      .then((res) => {
        dispatch(createAction(PETCH_PRODUCT_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
