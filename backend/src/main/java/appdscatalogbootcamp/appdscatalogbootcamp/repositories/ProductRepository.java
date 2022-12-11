package appdscatalogbootcamp.appdscatalogbootcamp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import appdscatalogbootcamp.appdscatalogbootcamp.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{
	

}
