
import styled from "styled-components";
import { WordRotate } from "@/components/magicui/word-rotate";
import { profileData } from "@/configs/profilesConfig"; // 引入配置文件

export const ProfileCard = ({ data = profileData }) => {
  return (
    <StyledWrapper>
      <article className="card">
        <div className="temporary_text">
          <WordRotate
            className="text-4xl font-bold dark:text-white"
            words={data.rotateWords}
          />
        </div>

        <div className="card_content">
          <span className="card_title text-2xl">{data.title}</span>
          <span className="card_subtitle">{data.subtitle}</span>
          <ul className="card_description list-disc pl-5 mt-3 space-y-2 text-left">
            {data.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 380px;
    height: 380px;
    color: #2e2d31;
    background: #131313;
    overflow: hidden;
    border-radius: 20px;
    z-index: 2;
    border: 1px solid #333333; /* 添加深灰色边界 */

  }

.temporary_text {
  font-weight: bold;
  font-size: 24px;
  padding: 6px 12px;
  color: #f8f8f8;
  display: flex;
  align-items: center; 
  justify-content: center;
  height: 50%;
}

  .card_title {
    font-weight: bold;
  }

  .card_content {
    position: absolute;
    left: 0;
    bottom: 0;
    /* edit the width to fit card */
    width: 100%;
    padding: 40px;
    background: #f2f2f2;
    border-top-left-radius: 20px;
    /* edit here to change the height of the content box */
    transform: translateY(190px);
    transition: transform 0.5s;
    justify-content: center;
    height: 100%;
  }

  .card_content::before {
    content: "";
    position: absolute;
    top: -47px;
    right: -45px;
    width: 100px;
    height: 100px;
    transform: rotate(-175deg);
    border-radius: 50%;
    box-shadow: inset 48px 48px #f2f2f2;
  }

  .card_title {
    color: #131313;
    line-height: 15px;
  }

  .card_subtitle {
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .card_description {
    font-size: 14px;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .card:hover .card_content {
    transform: translateY(0);
  }

  .card:hover .card_description {
    opacity: 1;
    transition-delay: 0.5s;
  }
`;

