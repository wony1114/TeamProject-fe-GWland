import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {Button} from '@material-ui/core'
import styles from './SurveyForm.module.scss'

export default ()=>{
    const [step,setStep] = useState(1)
    const [gender,setGender] = useState('female')
    const [age,setAge] = useState('20')
    const [season,setSeason] = useState('봄')
    const [partner,setPartner] = useState('나혼자')
    const [duration,setDuration] = useState('2')
    const [theme,setTheme] = useState([])
    const [location,setLocation] = useState('강원도')

    const handlePrev = ()=>{setStep(prevStep=>prevStep-1)}
    const handleNext = ()=>{setStep(prevStep=>prevStep+1)}
    const handleGender = (e)=>{setGender(e.target.value)}
    const handleAge = (e)=>{setAge(e.target.value)}
    const handleSeason = (e)=>{setSeason(e.target.value)}
    const handlePartner = (e)=>{setPartner(e.target.value)}
    const handleDuration = (e)=>{setDuration(e.target.value)}
    const handleTheme = (e)=>{
        const val = e.target.value
        if(theme.includes(val)){
            setTheme(theme.filter(e=>e!==val))
        }else if(theme.length<3){
            setTheme(theme.concat(val))
        }else{
            e.target.checked=false
        }
    }
    const handleLocation = (e)=>{setLocation(e.target.value)}
    const submitSvy = (e)=>{
        e.preventDefault()
        Axios.post('http://localhost:8080/survey/save',{
            gender,age,season,partner,duration,location,
			theme1:theme[0],
			theme2:theme[1],
			theme3:theme[2]
        }).then((res)=>{alert(res)})
        .catch((err)=>{alert(err)})
    }

    return <>
    <div className={styles.wrap}>
		<div>
			<section class="search_wrap">
				<div className={styles.contentInner}>
					<h2 class="page_title page_tit1">AI 여행 추천</h2>
					<p class="page_subTitle">
						여행 키워드를 선택하면, AI가 여행코스를 추천해드립니다.
					</p>
					<form class="search_form">
						<section class="selelct_wrap">
							<div class="selelct_title">AI가 여행지를 분석 중입니다.</div>
							<ul class="step_map">
								<li class="active">
									<div class="step_box">
										<span class="step_text">1STEP</span>
										<i class="step_icon_default step_icon"></i>
									</div>
								</li>
								<li class="">
									<div class="step_box">
										<span class="step_text">2STEP</span>
										<i class="step_icon_default"></i>
									</div>
								</li>
								<li class="">
									<div class="step_box">
										<span class="step_text">3STEP</span>
										<i class="step_icon_default"></i>
									</div>
								</li>
								<li class="">
									<div class="step_box">
										<span class="step_text">4STEP</span>
										<i class="step_icon_default"></i>
									</div>
								</li>
							</ul>
							
							<div className={step===1?styles.selected_step:styles.step}>
								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em> 당신의 성별은 무엇인가요?</dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course">
												<input type="radio" id="course_gender_1" value="female" checked={gender==='female'} onChange={handleGender}/>
												<label for="course_gender_1">여성</label>
											</li>
											<li class="check_course">
												<input type="radio" value="male" id="course_gender_2" checked={gender==='male'} onChange={handleGender}/>
												<label for="course_gender_2">남성</label>
											</li>
										</ul>
									</dd>
								</dl>

								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em> 당신의 연령대는 무엇인가요?</dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course">
												<input type="radio" value="20" id="course_age_1" checked={age==='20'} onChange={handleAge}/>
												<label for="course_age_1">20</label>
											</li>
											<li class="check_course">
                                                <input type="radio" value="30" id="course_age_2" checked={age==='30'} onChange={handleAge}/>
												<label for="course_age_2">30</label>
											</li>
											<li class="check_course">
                                                <input type="radio" value="40" id="course_age_3" checked={age==='40'} onChange={handleAge}/>
												<label for="course_age_3">40</label>
											</li>
											<li class="check_course">
                                                <input type="radio" value="50" id="course_age_4" checked={age==='50'} onChange={handleAge}/>   
												<label for="course_age_4">50</label>
											</li>
											<li class="check_course">
                                                <input type="radio" value="60" id="course_age_5" checked={age==='60'} onChange={handleAge}/>
												<label for="course_age_5">60+</label>
											</li>
										</ul>
									</dd>
								</dl>

								<div className={styles.button_box}>
									<Button variant='contained' color='primary' onClick={handleNext}>다음</Button>
								</div>
							</div>
							
							<div className={step===2?styles.selected_step:styles.step}>
								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em> 언제 여행을 떠나시나요?</dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course">
												<input type="radio" value="봄" id="course1_1" checked={season==='봄'} onChange={handleSeason}/>
												<label for="course1_1">봄</label>
											</li>
											<li class="check_course">
												<input type="radio" value="여름" id="course1_2" checked={season==='여름'} onChange={handleSeason}/>
												<label for="course1_2">여름</label>
											</li>
											<li class="check_course">
												<input type="radio" value="가을" id="course1_3" checked={season==='가을'} onChange={handleSeason}/>
												<label for="course1_3">가을</label>
											</li>
											<li class="check_course">
												<input type="radio" value="겨울" id="course1_4" checked={season==='겨울'} onChange={handleSeason}/>
												<label for="course1_4">겨울</label>
											</li>
										</ul>
									</dd>
								</dl>

								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em> 누구와 함께하는 여행인가요?</dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course">
												<input type="radio" value="나혼자" id="course2_1" checked={partner==='나혼자'} onChange={handlePartner}/>
												<label for="course2_1">혼자</label>
											</li>
											<li class="check_course">
												<input type="radio" value="가족" id="course2_2" checked={partner==='가족'} onChange={handlePartner}/>
												<label for="course2_2">가족</label>
											</li>
											<li class="check_course">
												<input type="radio" value="연인" id="course2_3" checked={partner==='연인'} onChange={handlePartner}/>
												<label for="course2_3">연인</label>
											</li>
										</ul>
									</dd>
								</dl>

								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em>  어떤 일정으로 떠나시나요?</dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course">
												<input type="radio" value="1" id="course3_1" checked={duration==='1'} onChange={handleDuration}/>
												<label for="course3_1">당일</label>
											</li>
											<li class="check_course">
												<input type="radio" value="2" id="course3_2" checked={duration==='2'} onChange={handleDuration}/>
												<label for="course3_2">1박 2일</label>
											</li>
											<li class="check_course">
												<input type="radio" value="3" id="course3_3" checked={duration==='3'} onChange={handleDuration}/>
												<label for="course3_3">2박 이상</label>
											</li>
										</ul>
									</dd>
								</dl>

								<div className={styles.button_box}>
									<Button variant='contained' onClick={handlePrev}>이전</Button>
									<Button variant='contained' color='primary' onClick={handleNext}>다음</Button>
								</div>
							</div>

							<div className={step===3?styles.selected_step:styles.step}>
								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em> 관심있는 체험이나 테마가 있나요? <span class="maximum-text">(최대 3개)</span></dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course check_icon">
												<input type="checkbox" value="자연" id="course5_1" onChange={handleTheme}/>
												<label for="course5_1">
													<i class="check-icon course_trekking"></i>
													<p>자연/풍경</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="맛집" id="course5_2" onChange={handleTheme}/>
												<label for="course5_2">
													<i class="check-icon course_camping"></i>
													<p>맛집탐방</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="역사" id="course5_3" onChange={handleTheme}/>
												<label for="course5_3">
													<i class="check-icon course_leports"></i>
													<p>역사관광</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="휴양" id="course5_4" onChange={handleTheme}/>
												<label for="course5_4">
													<i class="check-icon course_activity"></i>
													<p>휴식/휴양</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="레포츠" id="course5_5" onChange={handleTheme}/>
												<label for="course5_5">
													<i class="check-icon course_drive"></i>
													<p>레포츠</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="축제" id="course5_6" onChange={handleTheme}/>
												<label for="course5_6">
													<i class="check-icon course_tasty"></i>
													<p>축제</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="체험" id="course5_7" onChange={handleTheme}/>
												<label for="course5_7">
													<i class="check-icon course_view"></i>
													<p>체험</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="쇼핑" id="course5_8" onChange={handleTheme}/>
												<label for="course5_8">
													<i class="check-icon course_display"></i>
													<p>쇼핑</p>
												</label>
											</li>
											<li class="check_course check_icon">
												<input type="checkbox" value="문화" id="course5_9" onChange={handleTheme}/>
												<label for="course5_9">
													<i class="check-icon course_market"></i>
													<p>문화/공연</p>
												</label>
											</li>
											
										</ul>
									</dd>
								</dl>

								<div className={styles.button_box}>
                                    <Button variant='contained' onClick={handlePrev}>이전</Button>
									<Button variant='contained' color='primary' onClick={handleNext}>다음</Button>
								</div>
							</div>

							<div className={step===4?styles.selected_step:styles.step}>
								<dl class="select_box">
									<dt class="select-question"><em class="Q-text">Q</em> 특별히 가고 싶은 지역이 있나요?</dt>
									<dd class="select-answer">
										<ul class="select_list">
											<li class="check_course">
												<input type="radio" value="강원도" id="course6_1" checked={location==='강원도'} onChange={handleLocation}/>
												<label for="course6_1">강원도 전체</label>
											</li>
											<li class="check_course">
												<input type="radio" value="춘천" id="course6_2" checked={location==='춘천'} onChange={handleLocation}/>
												<label for="course6_2">춘천</label>
											</li>
											<li class="check_course">
												<input type="radio" value="원주" id="course6_3" checked={location==='원주'} onChange={handleLocation}/>
												<label for="course6_3">원주</label>
											</li>
											<li class="check_course">
												<input type="radio" value="강릉" id="course6_4" checked={location==='강릉'} onChange={handleLocation}/>
												<label for="course6_4">강릉</label>
											</li>
											<li class="check_course">
												<input type="radio" value="동해" id="course6_5" checked={location==='동해'} onChange={handleLocation}/>
												<label for="course6_5">동해</label>
											</li>
											<li class="check_course">
												<input type="radio" value="태백" id="course6_6" checked={location==='태백'} onChange={handleLocation}/>
												<label for="course6_6">태백</label>
											</li>
											<li class="check_course">
												<input type="radio" value="속초" id="course6_7" checked={location==='속초'} onChange={handleLocation}/>
												<label for="course6_7">속초</label>
											</li>
											<li class="check_course">
												<input type="radio" value="삼척" id="course6_8" checked={location==='삼척'} onChange={handleLocation}/>
												<label for="course6_8">삼척</label>
											</li>
											<li class="check_course">
												<input type="radio" value="홍천" id="course6_9" checked={location==='홍천'} onChange={handleLocation}/>
												<label for="course6_9">홍천</label>
											</li>
											<li class="check_course">
												<input type="radio" value="횡성" id="course6_10" checked={location==='횡성'} onChange={handleLocation}/>
												<label for="course6_10">횡성</label>
											</li>
											<li class="check_course">
												<input type="radio" value="영월" id="course6_11" checked={location==='영월'} onChange={handleLocation}/>
												<label for="course6_11">영월</label>
											</li>
											<li class="check_course">
												<input type="radio" value="평창" id="course6_12" checked={location==='평창'} onChange={handleLocation}/>
												<label for="course6_12">평창</label>
											</li>
											<li class="check_course">
												<input type="radio" value="정선" id="course6_13" checked={location==='정선'} onChange={handleLocation}/>
												<label for="course6_13">정선</label>
											</li>
											<li class="check_course">
												<input type="radio" value="철원" id="course6_14" checked={location==='철원'} onChange={handleLocation}/>
												<label for="course6_14">철원</label>
											</li>
											<li class="check_course">
												<input type="radio" value="화천" id="course6_15" checked={location==='화천'} onChange={handleLocation}/>
												<label for="course6_15">화천</label>
											</li>
											<li class="check_course">
												<input type="radio" value="양구" id="course6_16" checked={location==='양구'} onChange={handleLocation}/>
												<label for="course6_16">양구</label>
											</li>
											<li class="check_course">
												<input type="radio" value="인제" id="course6_17" checked={location==='인제'} onChange={handleLocation}/>
												<label for="course6_17">인제</label>
											</li>
											<li class="check_course">
												<input type="radio" value="고성" id="course6_18" checked={location==='고성'} onChange={handleLocation}/>
												<label for="course6_18">고성</label>
											</li>
                                            <li class="check_course">
												<input type="radio" value="양양" id="course6_19" checked={location==='양양'} onChange={handleLocation}/>
												<label for="course6_19">양양</label>
											</li>
										</ul>
									</dd>
								</dl>

								<div className={styles.button_box}>
                                    <Button variant='contained' onClick={handlePrev}>이전</Button>
									<Button variant='contained' color='primary' onClick={submitSvy}>결과 확인</Button>
								</div>
							</div>
						</section>
					</form>
				</div>
			</section>
		</div>
	
	</div>
    </>
}