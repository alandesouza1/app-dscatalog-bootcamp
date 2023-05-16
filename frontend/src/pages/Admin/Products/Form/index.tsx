import { Product } from "types/product";
import { useForm } from "react-hook-form";
import { requestBackend } from "util/requests";
import { AxiosRequestConfig } from "axios";
import { useHistory } from "react-router-dom";
import "./styles.css";

const Form = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
      imgUrl:
        "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/1-big.jpg",
      categories: [{ id: 1, name: " " }],
    };

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/products",
      data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push("/admin/products");
    });
  };

  const handleCancel = () => {
    history.push("/admin/products");
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">Dados do Produto</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input
                  {...register("name", {
                    required: "Campo Obrigatório",
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Nome do produto"
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>
              <div className="margin-bottom-30">
                <input
                  {...register("price", {
                    required: "Campo Obrigatório",
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Preço"
                  name="price"
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <textarea
                  rows={10}
                  {...register("description", {
                    required: "Campo Obrigatório",
                  })}
                  className={`form-control base-input h-auto ${
                    errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Descrição"
                  name="description"
                />
                <div className="invalid-feedback d-block">
                  {errors.description?.message}
                </div>
              </div>
            </div>
          </div>

          <div className="product-crud-buttons-container">
            <button
              className=" btn btn-outline-danger product-crud-buttons"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className=" btn btn-primary product-crud-buttons text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
