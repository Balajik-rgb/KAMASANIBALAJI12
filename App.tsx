import React from 'react';
import { Thermometer, Activity } from 'lucide-react';
import { SystemOverview } from './components/SystemOverview';
import { CircuitDiagram } from './components/CircuitDiagram';
import { TemperatureDisplay } from './components/TemperatureDisplay';
import { CodeExample } from './components/CodeExample';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-red-600 p-2 rounded-lg">
                <Thermometer size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Temperature Monitoring System</h1>
                <p className="text-sm text-gray-600">DHT22 Sensor with LCD Display & Serial Output</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Activity size={16} />
              <span>Arduino Powered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          
          {/* System Overview */}
          <SystemOverview />

          {/* Live Temperature Display */}
          <TemperatureDisplay />

          {/* Circuit Diagram */}
          <CircuitDiagram />

          {/* Code Examples */}
          <CodeExample />

          {/* Completion Certificate Section */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow-lg p-8 border border-green-200">
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Thermometer size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                🎓 Internship Project Complete
              </h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                This temperature monitoring system demonstrates complete mastery of Arduino programming, 
                sensor integration, LCD display control, and serial communication. The project includes 
                circuit design, comprehensive code implementation, and real-time data visualization.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-green-600">✓</div>
                  <div className="text-sm font-semibold text-gray-800">Circuit Design</div>
                  <div className="text-xs text-gray-600">Complete wiring diagram</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-blue-600">✓</div>
                  <div className="text-sm font-semibold text-gray-800">Code Implementation</div>
                  <div className="text-xs text-gray-600">Full Arduino program</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  <div className="text-2xl font-bold text-purple-600">✓</div>
                  <div className="text-sm font-semibold text-gray-800">Output Demonstration</div>
                  <div className="text-xs text-gray-600">LCD & Serial Monitor</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-300">
                <h4 className="text-lg font-bold text-gray-800 mb-2">🏆 Project Achievements</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-green-600">Sensor Integration</div>
                    <div className="text-gray-600">DHT22 Temperature & Humidity</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-blue-600">Display Control</div>
                    <div className="text-gray-600">16x2 LCD with I2C</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-purple-600">Data Logging</div>
                    <div className="text-gray-600">Serial Monitor Output</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-orange-600">Error Handling</div>
                    <div className="text-gray-600">Robust Code Design</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;