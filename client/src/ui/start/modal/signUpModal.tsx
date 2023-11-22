import { Modal, Form, Button } from 'react-bootstrap';
import type { SignUpModalProps } from '@/ui/start/modal/type/signUpModal.types';
import { SelectPreference } from '@/ui/start/preference/selectPreference';

export const SignUpModal = ({show, tagModal ,onHide, onSubmit, onChange, onClick}:SignUpModalProps) => {
  return(
    <Modal className="SignUpModal" show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Control type="text" id="name" name="name" placeholder="이름을 입력해주세요" onChange={onChange.handleNameChange}/>
          <Form.Select id="gender" name="gender" onChange={onChange.handleGenderChange}>
            <option defaultValue="(male/female)" hidden>(남/여)</option>
            <option value="MALE">남</option>
            <option value="FEMALE">여</option>
          </Form.Select>
          <Form.Control type="email" id="email" name="email" placeholder="이메일을 입력해주세요" onChange={onChange.handleEmailChange}/>
            <Button onClick={onClick.sendEmailToServer}>전송</Button>
          <Form.Control type="text" id="emailCode" name="emailCode" placeholder="이메일 인증 코드를 입력해주세요" onChange={onChange.handleEmailCodeChange}/>
            <Button onClick={onClick.sendEmailCodeToServer}>확인</Button>
          <Form.Control type="password" id="password" name="password" placeholder="비밀번호를 입력해주세요" onChange={onChange.handlePasswordChange}/>
          <Form.Control type="password" id="confirmPassword" name="confirmPassword" placeholder="비밀번호를 확인하세요" onChange={onChange.handleConfirmPasswordChange}/>
            <Button variant="secondary" onClick={onClick.openTagModal}>태그선택</Button>
              {tagModal && <SelectPreference /> }
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={onSubmit}>저장하기</Button>
      </Modal.Footer>
    </Modal>
  )
}
