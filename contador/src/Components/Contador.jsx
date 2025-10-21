import React, { useState, useEffect } from 'react';

const Contador = () => {
    const formaturaDate = new Date('2025-12-15T00:00:00'); // Data atualizada para a formatura
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(formaturaDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft(formaturaDate));
        }, 1000);
        return () => clearInterval(timer); // Limpa o intervalo quando o componente for desmontado
    }, [formaturaDate]);

    function getTimeLeft(targetDate) {
        const now = new Date();
        const diff = targetDate - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds, diff };
    }

    return (
        <div className="contador">
            {timeLeft.diff > 0 ? (
                <div className="relatorio">
                    <div className="time-block">
                        <span className="time">{timeLeft.days}</span>
                        <span className="label">Dias</span>
                    </div>
                    <div className="time-block">
                        <span className="time">{timeLeft.hours}</span>
                        <span className="label">Horas</span>
                    </div>
                    <div className="time-block">
                        <span className="time">{timeLeft.minutes}</span>
                        <span className="label">Minutos</span>
                    </div>
                    <div className="time-block">
                        <span className="time">{timeLeft.seconds}</span>
                        <span className="label">Segundos</span>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Parabéns, chegou o grande dia da nossa formatura!</h2>
                </div>
            )}
        </div>
    );
};

export default Contador;
