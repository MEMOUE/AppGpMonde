package com.gpmonde.backgp.Repositorys;

import com.gpmonde.backgp.Entities.Besoin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BesoinRepository extends JpaRepository<Besoin, Long> {
}
