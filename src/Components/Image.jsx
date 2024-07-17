import product from "../product";

const Image = () => {
  return (
    <div>
      <img src={product.path} alt="product" />
    </div>
  );
};

export default Image;
