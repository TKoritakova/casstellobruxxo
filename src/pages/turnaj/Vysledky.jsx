import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import TurnajNav from './TurnajNav.jsx'

const Vysledky = () => (
  <div>
    <TurnajNav/>
    <div className="main-header"><h1>Výsledky turnaje</h1></div>

    <p>Níže je statistika se všemi našimi účastníky turnaje a body, které v jednotlivých úkolech získali.</p>


    <table className="post-tabulka">
      <tr>
        <td>Jméno</td>
        <td>1.</td>
        <td>2.</td>
        <td>3.</td>
        <td>4.</td>
        <td>5.</td>
        <td>6.</td>
        <td>Celkem</td>
      </tr>
      <tr>
        <td>Alejandro Navarro</td>
        <td>18.5</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>18.5</td>
      </tr>
      <tr>
        <td>Alejandro Sánchez</td>
        <td>-</td>
        <td>25</td>
        <td>-</td>
        <td>20</td>
        <td>-</td>
        <td>-</td>
        <td>45</td>
      </tr>
      <tr>
        <td>Catriel Ulises Condori</td>
        <td>27.5</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>27.5</td>
      </tr>
      <tr>
        <td>César Jesus Giménez Castillero</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>17</td>
        <td>-</td>
        <td>-</td>
        <td>17</td>
      </tr>
      <tr>
        <td>Chiara Antonia José</td>
        <td>25.5</td>
        <td>25.5</td>
        <td>25</td>
        <td>22.5</td>
        <td>19</td>
        <td>23</td>
        <td>140.5</td>
      </tr>
      <tr>
        <td>Inés Soraya Caro</td>
        <td>-</td>
        <td>-</td>
        <td>26.5</td>
        <td>31.5</td>
        <td>31</td>
        <td>33</td>
        <td>122</td>
      </tr>
      <tr>
        <td>Juan Miguel Santos Ramírez</td>
        <td>26.5</td>
        <td>25.5</td>
        <td>27</td>
        <td>28.5</td>
        <td>26</td>
        <td>32</td>
        <td>165.5</td>
      </tr>
      <tr>
        <td>Luana Mariana Almeida Soares</td>
        <td>24.5</td>
        <td>-</td>
        <td>25.5</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Lucia Juliana Navarro</td>
        <td>25.5</td>
        <td>20.5</td>
        <td>24.5</td>
        <td>19</td>
        <td>23</td>
        <td>-</td>
        <td>112.5</td>
      </tr>
      <tr>
        <td>Mateo Benítez</td>
        <td>29</td>
        <td>30</td>
        <td>25.5</td>
        <td>21.5</td>
        <td>20</td>
        <td>19</td>
        <td>145</td>
      </tr>
      <tr>
        <td>Sofia Amarilis Perez</td>
        <td>27</td>
        <td>34.5</td>
        <td>28</td>
        <td>32.5</td>
        <td>34</td>
        <td>34</td>
        <td>190</td>
      </tr>
      <tr>
        <td>Sofía Sánchez</td>
        <td>27.5</td>
        <td>29</td>
        <td>20.5</td>
        <td>22.5</td>
        <td>28</td>
        <td>-</td>
        <td>127.5</td>
      </tr>

    </table>


  </div>
)

export default Vysledky