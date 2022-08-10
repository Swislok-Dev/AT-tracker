import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import flightsService from "./flightsService";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  flights: [
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659935730-fa-0001",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N29971",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659918110-airline-0434",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 0,
      arrival_delay: 0,
      filed_ete: 35100,
      scheduled_out: "2022-08-10T12:40:00Z",
      estimated_out: "2022-08-10T12:40:00Z",
      actual_out: null,
      scheduled_off: "2022-08-10T12:50:00Z",
      estimated_off: "2022-08-10T12:50:00Z",
      actual_off: null,
      scheduled_on: "2022-08-10T22:35:00Z",
      estimated_on: "2022-08-10T22:35:00Z",
      actual_on: null,
      scheduled_in: "2022-08-10T22:45:00Z",
      estimated_in: "2022-08-10T22:45:00Z",
      actual_in: null,
      progress_percent: 0,
      status: "Scheduled",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 431,
      filed_altitude: null,
      route: null,
      baggage_claim: null,
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: null,
      gate_destination: null,
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659849327-fa-0008",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N27964",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659753017-fa-0007",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 0,
      arrival_delay: 0,
      filed_ete: 35100,
      scheduled_out: "2022-08-09T12:40:00Z",
      estimated_out: "2022-08-09T12:40:00Z",
      actual_out: null,
      scheduled_off: "2022-08-09T12:50:00Z",
      estimated_off: "2022-08-09T12:50:00Z",
      actual_off: null,
      scheduled_on: "2022-08-09T22:35:00Z",
      estimated_on: "2022-08-09T22:35:00Z",
      actual_on: null,
      scheduled_in: "2022-08-09T22:45:00Z",
      estimated_in: "2022-08-09T22:45:00Z",
      actual_in: null,
      progress_percent: 0,
      status: "En Route / Delayed",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 481,
      filed_altitude: 380,
      route: "4509N/05709W BOS BAF Q448 PTW J48 MOL VXV SQS AEX GESNR1",
      baggage_claim: "F12",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: null,
      gate_destination: "E4",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659762924-fa-0000",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N45956",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659666128-fa-0003",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: -180,
      arrival_delay: -540,
      filed_ete: 32940,
      scheduled_out: "2022-08-08T12:40:00Z",
      estimated_out: "2022-08-08T12:40:00Z",
      actual_out: "2022-08-08T12:37:00Z",
      scheduled_off: "2022-08-08T12:50:00Z",
      estimated_off: "2022-08-08T13:19:34Z",
      actual_off: "2022-08-08T13:19:34Z",
      scheduled_on: "2022-08-08T21:59:00Z",
      estimated_on: "2022-08-08T22:25:00Z",
      actual_on: "2022-08-08T22:25:00Z",
      scheduled_in: "2022-08-08T22:45:00Z",
      estimated_in: "2022-08-08T22:32:00Z",
      actual_in: "2022-08-08T22:36:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 487,
      filed_altitude: 400,
      route:
        "GOGSI N621 EVTES N514 ADKIK N19 KOXOD N19 GAPLI OMOKO NATD 4600N/03000W NATD JOBOC LARGE LYNUS ORF VXV SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: null,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B41",
      gate_destination: "E18",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659676526-fa-0005",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N26970",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659658805-airline-0006",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: -120,
      arrival_delay: -1680,
      filed_ete: 33480,
      scheduled_out: "2022-08-07T12:40:00Z",
      estimated_out: "2022-08-07T12:40:00Z",
      actual_out: "2022-08-07T12:38:00Z",
      scheduled_off: "2022-08-07T12:50:00Z",
      estimated_off: "2022-08-07T12:52:39Z",
      actual_off: "2022-08-07T12:52:39Z",
      scheduled_on: "2022-08-07T22:08:00Z",
      estimated_on: "2022-08-07T22:05:00Z",
      actual_on: "2022-08-07T22:05:00Z",
      scheduled_in: "2022-08-07T22:45:00Z",
      estimated_in: "2022-08-07T22:12:00Z",
      actual_in: "2022-08-07T22:17:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 491,
      filed_altitude: 340,
      route:
        "CPT UL9 DIKAS L180 SWANY L180 LESLU SOMAX NATC 480000N/0300000W NATC RAFIN N84A BRADD BOS BAF Q448 PTW J48 MOL VXV SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B32",
      gate_destination: "E18",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659536884-fa-0002",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N27957",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659532050-fa-0001",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: -420,
      arrival_delay: -360,
      filed_ete: 33960,
      scheduled_out: "2022-08-06T12:40:00Z",
      estimated_out: "2022-08-06T12:40:00Z",
      actual_out: "2022-08-06T12:33:00Z",
      scheduled_off: "2022-08-06T12:50:00Z",
      estimated_off: "2022-08-06T13:01:31Z",
      actual_off: "2022-08-06T13:01:31Z",
      scheduled_on: "2022-08-06T22:16:00Z",
      estimated_on: "2022-08-06T22:22:00Z",
      actual_on: "2022-08-06T22:22:00Z",
      scheduled_in: "2022-08-06T22:45:00Z",
      estimated_in: "2022-08-06T22:31:00Z",
      actual_in: "2022-08-06T22:39:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 489,
      filed_altitude: 340,
      route:
        "CPT UL9 KENET N14 PEMOB N24 SLANY MALOT 530000N/0200000W 520000N/0300000W 510000N/0400000W 490000N/0500000W JOOPY BRIDG CABCI ART BUF VHP PXV SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B33",
      gate_destination: "E7",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659503729-fa-0007",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N36962",
      atc_ident: null,
      inbound_fa_flight_id: "UAL5-1659490033-airline-0014",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 0,
      arrival_delay: 1800,
      filed_ete: 33720,
      scheduled_out: "2022-08-05T12:40:00Z",
      estimated_out: "2022-08-05T12:40:00Z",
      actual_out: "2022-08-05T12:40:00Z",
      scheduled_off: "2022-08-05T12:50:00Z",
      estimated_off: "2022-08-05T13:02:00Z",
      actual_off: "2022-08-05T12:56:44Z",
      scheduled_on: "2022-08-05T22:12:00Z",
      estimated_on: "2022-08-05T23:03:00Z",
      actual_on: "2022-08-05T23:03:00Z",
      scheduled_in: "2022-08-05T22:45:00Z",
      estimated_in: "2022-08-05T23:14:00Z",
      actual_in: "2022-08-05T23:15:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 488,
      filed_altitude: 380,
      route: "4500N/08000W DJB FLM SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B49",
      gate_destination: "E7",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659417327-fa-0002",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N19951",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659359258-fa-0001",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 1080,
      arrival_delay: -480,
      filed_ete: 33720,
      scheduled_out: "2022-08-04T12:40:00Z",
      estimated_out: "2022-08-04T12:40:00Z",
      actual_out: "2022-08-04T12:58:00Z",
      scheduled_off: "2022-08-04T12:50:00Z",
      estimated_off: "2022-08-04T13:12:04Z",
      actual_off: "2022-08-04T13:12:04Z",
      scheduled_on: "2022-08-04T22:12:00Z",
      estimated_on: "2022-08-04T22:33:00Z",
      actual_on: "2022-08-04T22:33:00Z",
      scheduled_in: "2022-08-04T22:45:00Z",
      estimated_in: "2022-08-04T22:41:00Z",
      actual_in: "2022-08-04T22:37:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 488,
      filed_altitude: 380,
      route: "4500N/08000W DJB FLM SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B46",
      gate_destination: "E5",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659330931-fa-0000",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N15969",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659234072-fa-0000",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 3960,
      arrival_delay: 2940,
      filed_ete: 33420,
      scheduled_out: "2022-08-03T12:40:00Z",
      estimated_out: "2022-08-03T13:30:00Z",
      actual_out: "2022-08-03T13:46:00Z",
      scheduled_off: "2022-08-03T12:50:00Z",
      estimated_off: "2022-08-03T14:08:00Z",
      actual_off: "2022-08-03T14:04:03Z",
      scheduled_on: "2022-08-03T22:07:00Z",
      estimated_on: "2022-08-03T23:21:00Z",
      actual_on: "2022-08-03T23:21:00Z",
      scheduled_in: "2022-08-03T22:45:00Z",
      estimated_in: "2022-08-03T23:29:00Z",
      actual_in: "2022-08-03T23:34:00Z",
      progress_percent: 100,
      status: "Arrived / Delayed",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 495,
      filed_altitude: 320,
      route:
        "CPT UL9 KENET N14 TOPRO N14 BAKUR RESNO NATB RIKAL QUBIS KJOHN ALB FQM JST HVQ BNA SQS AEX DOOBI2",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B34",
      gate_destination: "E18",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659244526-fa-0001",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N24973",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659205135-fa-0000",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 1380,
      arrival_delay: 1440,
      filed_ete: 33960,
      scheduled_out: "2022-08-02T12:40:00Z",
      estimated_out: "2022-08-02T12:40:00Z",
      actual_out: "2022-08-02T13:03:00Z",
      scheduled_off: "2022-08-02T12:50:00Z",
      estimated_off: "2022-08-02T13:30:33Z",
      actual_off: "2022-08-02T13:30:33Z",
      scheduled_on: "2022-08-02T22:16:00Z",
      estimated_on: "2022-08-02T22:56:00Z",
      actual_on: "2022-08-02T22:56:00Z",
      scheduled_in: "2022-08-02T22:45:00Z",
      estimated_in: "2022-08-02T23:06:00Z",
      actual_in: "2022-08-02T23:09:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 492,
      filed_altitude: 360,
      route:
        "CPT UL9 KENET N14 PEMOB M17 VATRY ERNAN APSOV AGORI 590000N/0200000W 600000N/0300000W 600000N/0400000W 590000N/0500000W VESMI LOMTA 550000N/0710000W VETRO SSM PNT LIT J180 SWB GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B41",
      gate_destination: "E7",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659185187-airline-0025",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N27958",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1659061800-fa-0000",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 2160,
      arrival_delay: 3600,
      filed_ete: 34620,
      scheduled_out: "2022-08-01T12:40:00Z",
      estimated_out: "2022-08-01T12:40:00Z",
      actual_out: "2022-08-01T13:16:00Z",
      scheduled_off: "2022-08-01T12:50:00Z",
      estimated_off: "2022-08-01T13:37:07Z",
      actual_off: "2022-08-01T13:37:07Z",
      scheduled_on: "2022-08-01T22:27:00Z",
      estimated_on: "2022-08-01T23:32:00Z",
      actual_on: "2022-08-01T23:32:00Z",
      scheduled_in: "2022-08-01T22:45:00Z",
      estimated_in: "2022-08-01T23:44:00Z",
      actual_in: "2022-08-01T23:45:00Z",
      progress_percent: 100,
      status: "Arrived / Delayed",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 498,
      filed_altitude: 340,
      route:
        "CPT UL9 KENET N14 PEMOB N24 SLANY PIKIL NATA HOIST N600A YBC MSS JHW FLM SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: null,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B33",
      gate_destination: "E4",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659071744-fa-0003",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N28987",
      atc_ident: null,
      inbound_fa_flight_id: "UAL923-1658975402-fa-0001",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 0,
      arrival_delay: 360,
      filed_ete: 34200,
      scheduled_out: "2022-07-31T12:40:00Z",
      estimated_out: "2022-07-31T12:40:00Z",
      actual_out: "2022-07-31T12:40:00Z",
      scheduled_off: "2022-07-31T12:50:00Z",
      estimated_off: "2022-07-31T13:02:00Z",
      actual_off: "2022-07-31T12:57:45Z",
      scheduled_on: "2022-07-31T22:20:00Z",
      estimated_on: "2022-07-31T22:42:00Z",
      actual_on: "2022-07-31T22:42:00Z",
      scheduled_in: "2022-07-31T22:45:00Z",
      estimated_in: "2022-07-31T22:51:00Z",
      actual_in: "2022-07-31T22:51:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 508,
      filed_altitude: 320,
      route:
        "CPT UL9 KENET N14 MEDOG L18 LIPGO REVNU ETARI NATB KODIK N540C YBC LIDAG CRL VHP SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: 21,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B33",
      gate_destination: "E18",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1659012060-schedule-0371",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N35953",
      atc_ident: null,
      inbound_fa_flight_id: "UAL5-1658971747-airline-0213",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: 1140,
      arrival_delay: 1200,
      filed_ete: 34080,
      scheduled_out: "2022-07-30T12:40:00Z",
      estimated_out: "2022-07-30T13:00:00Z",
      actual_out: "2022-07-30T12:59:00Z",
      scheduled_off: "2022-07-30T12:50:00Z",
      estimated_off: "2022-07-30T13:20:25Z",
      actual_off: "2022-07-30T13:20:25Z",
      scheduled_on: "2022-07-30T22:18:00Z",
      estimated_on: "2022-07-30T23:00:00Z",
      actual_on: "2022-07-30T23:00:00Z",
      scheduled_in: "2022-07-30T22:45:00Z",
      estimated_in: "2022-07-30T23:13:00Z",
      actual_in: "2022-07-30T23:05:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 488,
      filed_altitude: 380,
      route: "4500N/08000W DJB FLM SQS AEX GESNR1",
      baggage_claim: "F6",
      seats_cabin_business: null,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B32",
      gate_destination: "E5",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
    {
      ident: "UAL4",
      ident_icao: "UAL4",
      ident_iata: "UA4",
      fa_flight_id: "UAL4-1658925845-airline-0012",
      operator: "UAL",
      operator_icao: "UAL",
      operator_iata: "UA",
      flight_number: "4",
      registration: "N35953",
      atc_ident: null,
      inbound_fa_flight_id: "UAL5-1658885323-airline-0009",
      codeshares: ["ACA5931", "AUA7813", "BEL9080", "DLH7621", "SWR3038"],
      codeshares_iata: ["AC5931", "OS7813", "SN9080", "LH7621", "LX3038"],
      blocked: false,
      diverted: false,
      cancelled: false,
      position_only: false,
      origin: {
        code: "EGLL",
        code_icao: "EGLL",
        code_iata: "LHR",
        code_lid: null,
        airport_info_url: "/airports/EGLL",
      },
      destination: {
        code: "KIAH",
        code_icao: "KIAH",
        code_iata: "IAH",
        code_lid: "IAH",
        airport_info_url: "/airports/KIAH",
      },
      departure_delay: -240,
      arrival_delay: 1620,
      filed_ete: 34800,
      scheduled_out: "2022-07-29T12:40:00Z",
      estimated_out: "2022-07-29T12:40:00Z",
      actual_out: "2022-07-29T12:36:00Z",
      scheduled_off: "2022-07-29T12:50:00Z",
      estimated_off: "2022-07-29T12:58:53Z",
      actual_off: "2022-07-29T12:58:53Z",
      scheduled_on: "2022-07-29T22:30:00Z",
      estimated_on: "2022-07-29T23:06:00Z",
      actual_on: "2022-07-29T23:06:00Z",
      scheduled_in: "2022-07-29T22:45:00Z",
      estimated_in: "2022-07-29T23:11:00Z",
      actual_in: "2022-07-29T23:12:00Z",
      progress_percent: 100,
      status: "Arrived / Gate Arrival",
      aircraft_type: "B789",
      route_distance: 4829,
      filed_airspeed: 488,
      filed_altitude: 380,
      route: "4500N/08000W DJB FLM SQS AEX GESNR1",
      baggage_claim: "F4",
      seats_cabin_business: null,
      seats_cabin_coach: null,
      seats_cabin_first: 48,
      gate_origin: "B46",
      gate_destination: "E18",
      terminal_origin: "2",
      terminal_destination: "E",
      type: "Airline",
    },
  ],
};

export const getFlights = createAsyncThunk(
  "flights/:ident",
  async (flightNumber, thunkAPI) => {
    try {
      /*const flights =*/
      return await flightsService.getFlightInfo(flightNumber);
      // return flights
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//  TODO: Function used to bring in mock data (delete before commit)
export const getInitFlights = createAsyncThunk(
  "flights",
  async (_, thunkAPI) => {
    try {
      return initialState;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const flightsSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.flights = action.payload;
      })
      .addCase(getFlights.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getInitFlights.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInitFlights.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(getInitFlights.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isLoading = false;
      });
  },
});

// export const { reset } = flightsSlice.actions
export default flightsSlice.reducer;
