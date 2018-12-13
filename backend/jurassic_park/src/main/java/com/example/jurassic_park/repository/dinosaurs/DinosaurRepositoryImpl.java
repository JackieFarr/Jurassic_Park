package com.example.jurassic_park.repository.dinosaurs;

import com.example.jurassic_park.models.Dinosaur;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

public class DinosaurRepositoryImpl implements DinosaurRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Dinosaur> getAllDinosForPaddock(String paddock){
        List<Dinosaur> results = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Dinosaur.class);
            cr.add(Restrictions.eq("paddock", paddock));
            results = cr.list();
        } catch (HibernateException ex) {
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }
}
