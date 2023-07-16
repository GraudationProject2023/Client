package GraduationProject.TripPlannerZ.dto;

import GraduationProject.TripPlannerZ.domain.Member;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class TripDetail {

    private Long id;
    private String UUID;
    private String title;
    private String startingDate;
    private String comingDate;

    private String content;
    private int memberNum;
    private List<Member> memberList = new ArrayList<>();

    public TripDetail(Long id, String UUID, String title, String startingDate, String comingDate, String content, int memberNum, List<Member> memberList) {
        this.id = id;
        this.UUID = UUID;
        this.title = title;
        this.startingDate = startingDate;
        this.comingDate = comingDate;
        this.content = content;
        this.memberNum = memberNum;
        this.memberList = memberList;
    }
}
