package com.walab.classroom.domain.repository;

import java.time.LocalDateTime;
import java.util.List;
import javax.persistence.EntityManager;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.walab.classroom.domain.ClassRoom;
import com.walab.classroom.domain.QClassRoom;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

import static com.walab.classroom.domain.QClassRoom.classRoom;

public class ClassRoomRepositoryCustomImpl extends QuerydslRepositorySupport implements ClassRoomRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    public ClassRoomRepositoryCustomImpl(EntityManager em) {
        super(ClassRoom.class);
        this.queryFactory = new JPAQueryFactory(em);
    }

    @Override
    public Page<ClassRoom> searchClassRoomByCondition(int condition, Pageable pageable) {

        JPAQuery<ClassRoom> query = queryFactory.select(classRoom)
                                                .from(classRoom)
                                                .leftJoin(classRoom.takes)
                                                .leftJoin(classRoom.instructor)
                                                .where(classRoom.isActive.eq(true))
                                                .orderBy(courseOrder(condition))
                                                .distinct()
                                                .fetchJoin();
        JPQLQuery<ClassRoom> pageableQuery = getQuerydsl().applyPagination(pageable, query);
        QueryResults<ClassRoom> fetchResults = pageableQuery.fetchResults();

        return new PageImpl<>(fetchResults.getResults(), pageable, fetchResults.getTotal());
    }


    private OrderSpecifier<?> courseOrder(int condition){
        if(condition == 0) return classRoom.createdAt.desc();
        else if(condition == 1) return classRoom.takes.size().desc();
        else if(condition == 2) return classRoom.className.asc();
        else return null;
    }

}
