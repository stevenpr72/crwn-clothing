import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './category-menu.styles';
const CategoryMenu = ({categories}) => {


    return (
    <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    )
}

export default CategoryMenu;