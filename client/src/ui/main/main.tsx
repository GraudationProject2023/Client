import { useState, useEffect } from "react";
import { Card, List, Progress, FloatButton } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons'

import { getEntireTripList } from "@/application/api/main/getEntireTripList";
import { useSelector } from "react-redux";

function MainPage() {

  const token = useSelector((state:any) => state.token.token);

  const [travelList, setTravelList] = useState([
  {
    title: '서울',
    currentNum: 1,
    recruitNum: 3,
    startingDate: '2023-10-20',
    comingDate: '2023-11-11',
  },
  {
    title: '부산',
    currentNum: 2,
    recruitNum: 5,
    startingDate: '2023-10-20',
    comingDate: '2023-11-11',
  },
  {
    title: '대구',
    currentNum: 3,
    recruitNum: 8,
    startingDate: '2023-10-20',
    comingDate: '2023-11-11',
  },
  {
    title: '인천',
    currentNum: 5,
    recruitNum: 6,
    startingDate: '2023-10-20',
    comingDate: '2023-11-11',
  },
  {
    title: '대전',
    currentNum: 1,
    recruitNum: 5,
    startingDate: '2023-10-20',
    comingDate: '2023-11-11',
  },
  {
    title: '제주',
    currentNum: 4,
    recruitNum: 5,
    startingDate: '2023-10-20',
    comingDate: '2023-11-11',
  }])


  const fetchData = async() => {
    const response = await getEntireTripList(token);
    console.log(response.data.content)
    const updateList = response.data.content
    setTravelList(updateList)
  }

  useEffect(() => {
    fetchData();
    console.log(token);
  }, [])
  
  function movetoSubPage(point) {
    window.location.href = `/search/${point}`;
  }
  
  return (
    <div>
      {/* <ImageSlider /> */}
      <br />
          {/* <TravelChart /> */}
          <List
            grid={{ gutter: 16, column: 6 }}
            dataSource={travelList}
            renderItem={(item) => (
              <List.Item>
              <Card
                onClick={(e) => movetoSubPage(item.id)}
                style={{ width: '300px', height: '340px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              >
              <h3 style={{ color: '#1890ff', marginBottom: '10px', textAlign: 'center' ,fontWeight: 'bold', fontSize: '1.5rem' }}>
                {item.title}
              </h3>
              <hr />
              {/* <KakaoMap width="200px" height="200px"/> */}
              <div style={{ color: '#666', marginBottom: '10px', fontSize: '1rem' }}>
                <strong>인원 현황: </strong>
                  {item.currentNum} / {item.recruitNum}
                <br />
                <Progress percent={Math.floor((item.currentNum / item.recruitNum) * 100)} status="active" />
              </div>
              <div style={{ color: '#666', fontSize: '0.9rem' }}>
                <strong>여행 기간:</strong> {item.startingDate} ~ {item.comingDate}
              </div>
            </Card>
            </List.Item>
          )}/>
      <FloatButton
        tooltip={<div>Questions</div>}
        style={{width: '60px', height: '60px'}}
        icon={<QuestionCircleOutlined/>}
      />
    </div>
  );
}

export default MainPage;