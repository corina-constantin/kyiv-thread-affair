import ProductTile from '../catalog/ProductTile';

export default function CatalogPreviews() {
  return (
    <>
      <section className="catalog-preview container">
        <header>
          <h1>
            <span>Glamour</span> Suits
          </h1>

          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles row">
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>
          <div className="col-12 col-lg-4 mb-5 mb-lg-0">
            <ProductTile></ProductTile>
          </div>
          <div className="col-12 col-lg-4">
            <ProductTile></ProductTile>
          </div>
        </div>
      </section>

      <section className="catalog-preview grid-layout container">
        <header>
          <h1>
            <span>Glamour</span> Suits
          </h1>

          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
        </div>
      </section>

      <section className="catalog-preview flex-layout container">
        <header>
          <h1>
            <span>Wedding</span> Suits
          </h1>

          <p>
            Accomplish new achievements with a bold new style from the brilliant
            collection of mens designer suits. <br />
            For the finest custom tailored experience, be sure to explore our
            selection of premium fabrics from one of the worlds oldest fabric
            mills, Vitale Barberis Canonico.
          </p>
        </header>

        <div className="product-tiles">
            <ProductTile></ProductTile>

            <ProductTile></ProductTile>

            <ProductTile></ProductTile>
        </div>
      </section>
    </>
  );
}

