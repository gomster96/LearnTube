package com.walab.classroom.domain.repository;

import javax.persistence.EntityManager;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.walab.classroom.domain.ClassRoom;

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
    public Page<ClassRoom> searchClassRoomByCondition(int condition, String keyword, Pageable pageable) {

        JPAQuery<ClassRoom> query = queryFactory.select(classRoom)
                                                .distinct()
                                                .from(classRoom)
                                                .leftJoin(classRoom.takes).fetchJoin()
                                                .leftJoin(classRoom.instructor).fetchJoin()
                                                .where(classRoom.isActive.eq(true))
                                                .where(classRoom.className.containsIgnoreCase(keyword)
                                                                          .or(classRoom.instructor.name.containsIgnoreCase(keyword)))
                                                .orderBy(courseOrder(condition));

        JPQLQuery<ClassRoom> pageableQuery = getQuerydsl().applyPagination(pageable, query);
        QueryResults<ClassRoom> fetchResults = pageableQuery.fetchResults();
        return new PageImpl<>(fetchResults.getResults(), pageable, fetchResults.getTotal());
    }


    private OrderSpecifier<?> courseOrder(int condition) {
        if (condition == 0)
            return classRoom.createdAt.desc();
        else if (condition == 1)
            return classRoom.takes.size().desc();
        else if (condition == 2)
            return classRoom.className.asc();
        else
            return null;
    }

}