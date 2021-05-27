import dynamic from 'next/dynamic'

const Chart = dynamic(
    () => import('react-apexcharts'),
    {ssr: false}
)



export const CandleStickChart = ({data}) => {
    return (
        <div>
            {
                data &&
                <Chart
                type = {"candlestick"}
                series= {data ? [data] : []}
                options = {
                    {xaxis : {type:'datetime'}}
                }
                width = {'100%'}
                />
            }
        </div>
        
    )
}