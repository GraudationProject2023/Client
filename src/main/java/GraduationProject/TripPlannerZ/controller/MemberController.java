package GraduationProject.TripPlannerZ.controller;

import GraduationProject.TripPlannerZ.domain.Member;
import GraduationProject.TripPlannerZ.service.MemberService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController // JSON 형태로 데이터를 반환하는 것
@RequiredArgsConstructor
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:8080"}, allowCredentials = "true")
public class MemberController {

    private final MemberService memberService;

    @PostMapping(value = "/members/join")
    // @PostMapping은 @RequestMapping(value = "/members", method= {RequestMethod.POST}) 와 동일
    public void createMember(@RequestBody MemberJoinDTO memberJoinDTO) {
        Member joinMember = Member.builder()
                .name(memberJoinDTO.getName())
                .pw(memberJoinDTO.getPw())
                .email(memberJoinDTO.getEmail())
                .gender(memberJoinDTO.getGender())
                .memberTeamList(new ArrayList<>())
                .build();

        /*
            프론트에서 데이터를 넘길 때에
            name, pw, email, gender, phoneNumber 라는 필드 명은 동일하게 넘어와야함.
            null이 들어와도 DB에 알아서 null로 대입됨
         */

        memberService.join(joinMember);
    }


}
