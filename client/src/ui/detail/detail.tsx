import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Card } from 'antd';

import type { Member } from '@/domain/Member';
import type { Trip } from '@/domain/TripList';
import type { TripPlaceInfo } from '@/domain/TripPlaceInfo';

import { getDetailTripInfo } from '@/application/api/detail/getDetailTripInfo';
import { getDetailTripRoute } from '@/application/api/detail/getDetailTripRoute';

import SideBar from '@/ui/sidebar/sidebar';
import { TripInfo } from '@/ui/detail/info/tripInfo';
import { CommentList } from '@/ui/detail/comment/comment';

const { Meta } = Card;

function DetailPage() {
  const token = useSelector((state: any) => state.token.token);

  const location = useLocation();
  const arr = location.pathname.split('/');

  const [detailTripInfo, setDetailTripInfo] = useState<Trip>({});
  const [tripContent, setTripContent] = useState<string>('');
  const [tripAccompanyMemberList, setTripAccompanyMemberList] = useState<
    Member[]
  >([]);
  const [searchPlaceList, setSearchPlaceList] = useState<TripPlaceInfo[]>([]);

  const handleGetDetailTripInfo = async () => {
    const response = await getDetailTripInfo(token, arr);

    if (response.data) {
      const receivedTripInfo: Record<
        Exclude<
          keyof Trip,
          | 'image'
          | 'capacity'
          | 'closeRecruitDate'
          | 'recruitNum'
          | 'currentNum'
          | 'area'
          | 'sigungu'
        >,
        any
      > = {
        id: response.data.id,
        uuid: response.data.uuid,
        title: response.data.title,
        content: response.data.content,
        startingDate: response.data.startingDate,
        comingDate: response.data.comingDate,
      };

      setDetailTripInfo((prevInfo) => ({
        ...prevInfo,
        ...receivedTripInfo,
      }));

      setTripContent(response.data.content);
      setTripAccompanyMemberList((prevList) => [
        ...prevList,
        ...response.data.memberList,
      ]);

      const additionalResponse = await getDetailTripRoute(
        token,
        response.data.uuid
      );

      setSearchPlaceList(additionalResponse.data);
    }
  };

  useEffect(() => {
    handleGetDetailTripInfo();
  }, []);

  return (
    <div style={{ width: '100%', height: 'calc(100vh)', display: 'flex' }}>
      <>
        <Row style={{ width: '100%', height: '100%' }}>
          <SideBar />
          <Col span={20} style={{ padding: '16px' }}>
            <Card>
              <Meta
                description={
                  <>
                    <div style={{ display: 'flex' }}>
                      <TripInfo
                        token={token}
                        tripInfo={detailTripInfo}
                        content={tripContent}
                        searchPlaceList={searchPlaceList}
                      />
                    </div>
                    {detailTripInfo.uuid && (
                      <CommentList tripUUID={detailTripInfo.uuid} />
                    )}
                  </>
                }
              ></Meta>
            </Card>
          </Col>
        </Row>
      </>
    </div>
  );
}

export default DetailPage;
