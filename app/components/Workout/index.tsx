"use client";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Work = () => {
    const [goal, setGoal] = useState("Pounds Lost Goal");
    const [medicalCondition, setMedicalCondition] = useState("no");
    const [additionalInput, setAdditionalInput] = useState("");
    const [markDown, setMarkDown] = useState('')

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isAdditionInput =
            additionalInput.length > 0
                ? `Please also take in consideration of these additional instruction ${additionalInput}`
                : "";
        const workoutInstructions = `Give me work out plan with exercises, I have a ${goal} and i have ${medicalCondition.length > 2 ? medicalCondition : ''}. ${isAdditionInput}`;
        getWorkoutPlan(workoutInstructions);
    };

    const getWorkoutPlan = async (workoutInstructions: string) => {
        console.log("clicked");
        try {
            const response = await fetch("/api/openai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    workOutPlan: workoutInstructions,
                }),
            })
            const data = await response.json()
            setMarkDown(data);
        } catch (error) {
            console.log(error)
        }

    }
    console.log("markDown", markDown)

    return (
        <div id='about-section'>
            <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexWrap: "wrap",
                    }}
                >
                    <div className='text-center mb-14 flex flex-col items-center justify-center'>
                        <h3 className='text-pink text-lg font-normal mb-3 ls-51 uppercase'>
                            AI BUDDY
                        </h3>
                        <p className='text-2xl lg:text-4xl font-semibold text-lightgrey'>
                            Get a many of interesting <br />
                            <span style={{ color: "#03b383" }}>buddy</span>
                            &nbsp; tips.
                        </p>
                    </div>
                    <form
                        onSubmit={(e: FormEvent<HTMLFormElement>) =>
                            onSubmit(e)
                        }
                        style={{ padding: "26px" }}
                    >
                        <select
                            required
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                setGoal(e.target.value)
                            }
                            style={{ width: "400px" }}
                            id='countries'
                            className='bg-gray-50 mb-5 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary'
                        >
                            <option selected value='Weight loss Goal'>
                                Pounds Lost Goal
                            </option>
                            <option value='Body Fat Percentage Goal'>
                                Body Fat Percentage Goal
                            </option>
                            <option value='Caloric Burn Goal'>
                                Caloric Burn Goal
                            </option>
                            <option value='Steady Weight Loss Goal'>
                                Steady Weight Loss Goal
                            </option>
                            <option value='Consistent Exercise Frequency Goal'>
                                Consistent Exercise Frequency Goal
                            </option>
                            <option value='Duration and Intensity Goal'>
                                Duration and Intensity Goal
                            </option>
                            <option value='Nutrition and Exercise Balance Goal'>
                                Nutrition and Exercise Balance Goal
                            </option>
                            <option value='Inch Loss Goal'>
                                Inch Loss Goal
                            </option>
                            <option value='Clothing Size Goal'>
                                Clothing Size Goal
                            </option>
                        </select>

                        <select
                            required
                            style={{ width: "400px" }}
                            id='countries'
                            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                                setMedicalCondition(e.target.value)
                            }
                            className='bg-gray-50 mb-5 border border-primary text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-3 dark:bg-gray-700 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary'
                        >
                            <option selected value='No'>
                                Do You Have Any Health Conditions?
                            </option>
                            <option value='No'>No</option>
                            <option value='Heart Disease'>Heart Disease</option>
                            <option value='Hypertension (High Blood Pressure)'>
                                Hypertension (High Blood Pressure)
                            </option>
                            <option value='Asthma'>Asthma</option>
                            <option value='Chronic Obstructive Pulmonary Disease (COPD)'>
                                Chronic Obstructive Pulmonary Disease (COPD)
                            </option>
                            <option value='Arthritis'>Arthritis</option>
                            <option value='Osteoporosis'>Osteoporosis</option>
                            <option value='Multiple Sclerosis (MS)'>
                                Multiple Sclerosis (MS)
                            </option>
                            <option value="ParDiseasekinson's Disease">
                                Parkinson&apos;s Disease
                            </option>
                            <option value='Diabetes'>Diabetes</option>
                            <option value='Obesity'>Obesity</option>
                            <option value='Pregnancy'>Pregnancy</option>
                            <option value='Mental Health Conditions'>
                                Mental Health Conditions
                            </option>
                            <option value='Autoimmune Conditions'>
                                Autoimmune Conditions
                            </option>
                            <option value='Cancer'>Cancer</option>
                            <option value='Kidney Disease'>
                                Kidney Disease
                            </option>
                            <option value='Injuries and Post-surgery Recovery'>
                                Injuries and Post-surgery Recovery
                            </option>
                        </select>

                        <textarea
                            id='exerciseDetails'
                            rows={4}
                            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                                setAdditionalInput(e.target.value)
                            }
                            className='block p-2.5 w-full text-sm mb-6 text-gray-900 bg-gray-50 rounded-lg border border-primary focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-primary dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary dark:focus:border-primary'
                            placeholder='add additional instructions...'
                        ></textarea>
                        <button className='flex border w-full md:w-auto md:mt-0 border-primary justify-center rounded-full text-xl font-medium items-center py-3 px-7 text-primary hover:text-white hover:bg-primary'>
                            Get Workout Plan
                        </button>
                    </form>
                </div>
            </Fade>
            <Markdown remarkPlugins={[remarkGfm]}>{`${markDown}`}</Markdown>
        </div>
    );
};

export default Work;
