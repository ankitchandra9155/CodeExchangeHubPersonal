package com.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.entities.QuestionVote;

@Repository
public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long>{

}
