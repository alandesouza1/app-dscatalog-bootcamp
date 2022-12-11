package appdscatalogbootcamp.appdscatalogbootcamp.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import appdscatalogbootcamp.appdscatalogbootcamp.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
