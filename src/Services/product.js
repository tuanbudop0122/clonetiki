import Axios from 'axios'
class ProductService{
    fetchProduct() {
        return Axios({
            method: "GET",
            url:
              "https://tiki.vn/api/v2/products?limit=48&q=laptop&page=3&fbclid=IwAR32CAYZHiwXd07C9Y4uaWNouj7WGAei3O89Ff_9udEiknHpYha_CqVGggs",
          });
    }
    fetchDetail(id) {
        return Axios({
          method: "GET",
          url: "https://tiki.vn/api/v2/products/" + id,
        });
      }
}
export default ProductService