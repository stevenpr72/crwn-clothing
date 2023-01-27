import { CategoryPreviewContainer, CategoryPreviewTitle, CategoryPreview2 } from './category-preview.styles';

import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                    <CategoryPreviewTitle className="title" to={title}>{title.toUpperCase()}</CategoryPreviewTitle>

            </h2>
            <CategoryPreview2>
                {
                    products
                    .filter((_, idx) => idx < 4)
                    .map((product) => 
                    <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </CategoryPreview2>
        </CategoryPreviewContainer>
    )

}

export default CategoryPreview;