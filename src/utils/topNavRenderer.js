import PersonalScreen from '../screens/PersonalScreen';
import JobScreen from '../screens/JobScreen';
import TimeOffScreen from '../screens/TimeOffScreen';
import DocumentsScreen from '../screens/DocumentsScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import PerformanceScreen from '../screens/PerformanceScreen';
import NotesScreen from '../screens/NotesScreen';

export default function renderTabs(screenName) {
    switch (screenName) {
        case 'Personal':
            return PersonalScreen
        case 'Job':
            return JobScreen
        case 'Time Off':
            return TimeOffScreen
        case 'Documents':
            return DocumentsScreen
        case 'Benefits':
            return BenefitsScreen
        case 'Performance':
            return PerformanceScreen
        case 'Notes':
            return NotesScreen
        default:
            return JobScreen
    }
}